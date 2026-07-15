<?php
// Define fuso horário oficial
date_default_timezone_set('America/Sao_Paulo');

// Cabeçalhos CORS para permitir comunicação do Painel e Site
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Lida com a requisição de pré-fluxo OPTIONS (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Configura tipo de resposta para JSON
header("Content-Type: application/json; charset=UTF-8");

$ordersFile = __DIR__ . '/orders.json';
$statusFile = __DIR__ . '/status.json';

// Função para ler arquivo JSON com segurança
function readJsonFile($filePath, $default = []) {
    if (!file_exists($filePath)) {
        file_put_contents($filePath, json_encode($default, JSON_PRETTY_PRINT));
        return $default;
    }
    $content = file_get_contents($filePath);
    $data = json_decode($content, true);
    return is_array($data) ? $data : $default;
}

// Função para salvar arquivo JSON com segurança
function writeJsonFile($filePath, $data) {
    file_put_contents($filePath, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}

// Extrai a rota da URL reescrita pelo .htaccess
$route = isset($_GET['route']) ? trim($_GET['route'], '/') : '';
$method = $_SERVER['REQUEST_METHOD'];

// Captura e decodifica o corpo da requisição JSON
$inputRaw = file_get_contents('php://input');
$input = json_decode($inputRaw, true);

// Roteamento do endpoint de Status
if ($route === 'status') {
    if ($method === 'GET') {
        $status = readJsonFile($statusFile, ['isOpen' => true]);
        echo json_encode($status);
        exit;
    }
    
    if ($method === 'PUT') {
        if (!isset($input['isOpen']) || !is_bool($input['isOpen'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Campo isOpen inválido.']);
            exit;
        }
        $status = ['isOpen' => $input['isOpen']];
        writeJsonFile($statusFile, $status);
        echo json_encode($status);
        exit;
    }
}

// Roteamento do endpoint de Pedidos (Geral)
if ($route === 'orders') {
    if ($method === 'GET') {
        $orders = readJsonFile($ordersFile, []);
        // Ordena por timestamp mais novo primeiro
        usort($orders, function($a, $b) {
            return ($b['timestamp'] ?? 0) - ($a['timestamp'] ?? 0);
        });
        echo json_encode($orders);
        exit;
    }
    
    if ($method === 'POST') {
        if (!isset($input['clientName']) || empty($input['clientName']) || !isset($input['cart']) || empty($input['cart'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Dados do pedido inválidos ou incompletos.']);
            exit;
        }
        
        $orders = readJsonFile($ordersFile, []);
        
        // Gerar metadados do pedido
        $timestamp = round(microtime(true) * 1000);
        $dateFormatted = date('d/m/Y');
        $timeFormatted = date('H:i');
        
        // Determinar ID incremental iniciando em 1001
        $maxId = 1000;
        foreach ($orders as $order) {
            if (isset($order['id']) && $order['id'] > $maxId) {
                $maxId = $order['id'];
            }
        }
        $newId = $maxId + 1;
        
        $orderRecord = [
            'id' => $newId,
            'clientName' => $input['clientName'],
            'clientPhone' => $input['clientPhone'] ?? '',
            'checkoutType' => $input['checkoutType'] ?? 'delivery',
            'address' => $input['address'] ?? null,
            'paymentMethod' => $input['paymentMethod'] ?? '',
            'cashChange' => $input['cashChange'] ?? null,
            'cart' => $input['cart'],
            'subtotal' => $input['subtotal'] ?? 0,
            'deliveryFee' => $input['deliveryFee'] ?? 0,
            'total' => $input['total'] ?? 0,
            'status' => 'Pendente',
            'timestamp' => $timestamp,
            'time' => $timeFormatted,
            'date' => $dateFormatted
        ];
        
        $orders[] = $orderRecord;
        writeJsonFile($ordersFile, $orders);
        
        http_response_code(201);
        echo json_encode($orderRecord);
        exit;
    }
    
    if ($method === 'DELETE') {
        writeJsonFile($ordersFile, []);
        echo json_encode(['message' => 'Todos os pedidos foram apagados com sucesso.']);
        exit;
    }
}

// Roteamento do endpoint de Pedido Específico (PUT /api/orders/:id para alterar status)
if (preg_match('/^orders\/([0-9]+)$/', $route, $matches)) {
    $orderId = (int)$matches[1];
    
    if ($method === 'PUT') {
        $validStatuses = ['Pendente', 'Preparando', 'Entrega', 'Entregue', 'Cancelado'];
        if (!isset($input['status']) || !in_array($input['status'], $validStatuses)) {
            http_response_code(400);
            echo json_encode(['error' => 'Status inválido.']);
            exit;
        }
        
        $orders = readJsonFile($ordersFile, []);
        $foundIndex = -1;
        foreach ($orders as $index => $order) {
            if (isset($order['id']) && $order['id'] === $orderId) {
                $foundIndex = $index;
                break;
            }
        }
        
        if ($foundIndex === -1) {
            http_response_code(404);
            echo json_encode(['error' => 'Pedido não encontrado.']);
            exit;
        }
        
        $orders[$foundIndex]['status'] = $input['status'];
        writeJsonFile($ordersFile, $orders);
        echo json_encode($orders[$foundIndex]);
        exit;
    }
}

// Resposta Padrão 404 para Endpoints não encontrados
http_response_code(404);
echo json_encode(['error' => 'Endpoint não encontrado no backend PHP: ' . $route]);
