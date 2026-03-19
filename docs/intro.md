# Tổng quan Hệ thống Microservices ops

Chào mừng bạn đến với tài liệu kỹ thuật của hệ thống **ops**. Đây là một nền tảng quản trị doanh nghiệp đa dịch vụ, được thiết kế để tự động hóa các quy trình nghiệp vụ (Workflow), quản lý kho bãi (WMS) và điều hành hạ tầng CNTT.

## 1. Danh sách các Microservices
Hệ thống được module hóa thành các dịch vụ độc lập để đảm bảo tính sẵn sàng và khả năng mở rộng:

- **Core Infrastructure:**
  - **eureka-server**: Trung tâm đăng ký và phát hiện dịch vụ (Service Discovery) [1, 2].
  - **api-gateway**: Điểm tiếp nhận yêu cầu duy nhất, thực hiện định tuyến và xác thực tập trung [1, 3].
  - **auth-service**: Quản lý định danh, xác thực JWT và đồng bộ hóa người dùng qua LDAP [1, 4, 5].

- **Business Operation Services:**
  - **efs-service (Electronic Form System)**: Dịch vụ lõi cung cấp Workflow Engine và quản lý biểu mẫu điện tử [6, 7].
  - **wms-service & inventory-service**: Hệ thống quản lý kho vận, theo dõi tồn kho theo vị trí và lô hàng [8-11].
  - **vehicle-service**: Quản lý phương tiện vận chuyển, bãi đỗ và lệnh điều xe [12, 13].

- **Management Services:**
  - **it-device-management-service**: Quản lý vòng đời thiết bị IT, máy tính và máy in [14, 15].
  - **company-registration-service**: Xử lý quy trình đăng ký doanh nghiệp và quản lý khách truy cập [16, 17].
  - **common-service**: Thư viện dùng chung, chứa các cấu hình JPA và Utilities cho toàn hệ thống [18, 19].

## 2. Công nghệ chủ đạo (Techstack)
Hệ thống tuân thủ các tiêu chuẩn phát triển phần mềm hiện đại:
- **Ngôn ngữ**: Java 17 [20, 21].
- **Framework**: Spring Boot 3.1.3.
- **Microservices Stack**: Spring Cloud (Gateway, Netflix Eureka) [2, 22, 23].
- **Database**: Microsoft SQL Server (sử dụng SQLServer2012Dialect) [24-26].
- **Security**: JWT (JSON Web Token), Spring Security, LDAP [3, 4, 24].
- **ORM/Query**: Kết hợp Spring Data JPA (Hibernate) và MyBatis cho các truy vấn phức tạp [24, 27-29].