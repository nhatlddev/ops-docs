# Kiến trúc Hệ thống

Hệ thống **ops** áp dụng mô hình kiến trúc Microservices tập trung vào **API Gateway-driven**, đảm bảo mọi yêu cầu đều được kiểm soát về mặt an ninh trước khi đến được lớp nghiệp vụ.

## 1. Đặc điểm kiến trúc
- **Xác thực tập trung (Centralized Auth)**: Toàn bộ logic kiểm tra JWT được thực hiện tại Gateway thông qua `AuthenticationFilter` [3, 30].
- **Cơ sở dữ liệu riêng biệt**: Mỗi Service sở hữu schema riêng trong MSSQL nhưng chia sẻ cấu hình Auditing thông qua `common-service` [24, 31].
- **Giao tiếp phi tập trung**: Các dịch vụ đăng ký với Eureka Server để cho phép Gateway định tuyến động mà không cần cấu hình IP cứng [2, 32].

## 2. Luồng Xác thực & Truy cập (Authentication Flow)

Dưới đây là quy trình từ lúc Client gửi yêu cầu đến khi được xử lý tại Business Service:

```mermaid
sequenceDiagram
    participant Client
    participant Gateway as API Gateway
    participant Auth as Auth Service
    participant Business as EFS / WMS Service

    Client->>Gateway: Request + JWT Header
    Note over Gateway: AuthenticationFilter activated [3]
    
    Gateway->>Gateway: Kiểm tra White-list (Public endpoints)
    
    alt Token valid
        Gateway->>Gateway: Giải mã & Trích xuất User Claims [32]
        Gateway->>Business: Forward request (kèm User Context)
        
        Note over Business: @PreAuthorize check [33, 34]
        Business->>Business: Thực thi logic nghiệp vụ
        Business-->>Gateway: Trả về kết quả (APIResponse) [35, 36]
        Gateway-->>Client: Phản hồi 200 OK
    else Token invalid/Expired
        Gateway-->>Client: Trả về 401 Unauthorized [37]
    end
