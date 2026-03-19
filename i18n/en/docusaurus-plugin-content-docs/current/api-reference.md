```markdown
# Danh mục API Quan trọng

Hệ thống cung cấp hệ thống API RESTful phong phú, được phân loại theo mục đích sử dụng.

## 1. Core Services (Auth & Gateway)
| Service | Method | Endpoint | Chức năng |
|:---|:---|:---|:---|
| Auth | POST | `/authentication/sign-in` | Đăng nhập và nhận JWT Access Token [38] |
| Auth | POST | `/admin/ldap/sync-users` | Đồng bộ người dùng từ máy chủ LDAP [33] |
| Gateway | GET | `/swagger-ui.html` | Cổng tra cứu tài liệu API tổng hợp [39] |

## 2. Business Services (EFS, WMS, Vehicle)
Đây là các dịch vụ chứa logic nghiệp vụ cốt lõi của hệ thống.

### EFS (Workflow & Form)
| Method | Endpoint | Chức năng |
|:---|:---|:---|
| POST | `/admin/workflow/definition` | Lưu và phân tích định nghĩa quy trình từ BPMN [40] |
| POST | `/user/process/new` | Khởi tạo một phiên thực thi quy trình mới [41] |
| POST | `/user/process/complete` | Hoàn thành bước xử lý hiện tại trong luồng [41] |
| POST | `/admin/process/trace` | Truy vết trạng thái chi tiết của một quy trình [42] |

### WMS & Inventory
| Method | Endpoint | Chức năng |
|:---|:---|:---|
| POST | `/admin/inventory/transaction/in/batch` | Nhập kho hàng loạt cho nhiều sản phẩm [11, 43] |
| POST | `/warehouse/inventory/transaction/out` | Xuất kho và kiểm tra tồn kho khả dụng [44, 45] |
| POST | `/admin/warehouse/location` | Thiết lập vị trí (Zone-Rack-Shelf-Bin) trong kho [46, 47] |

### Vehicle
| Method | Endpoint | Chức năng |
|:---|:---|:---|
| POST | `/security/orders` | Bảo vệ đăng ký lệnh điều xe ra vào bãi [48] |
| PUT | `/qc/orders/qc-confirmation` | QC phê duyệt chất lượng hàng hóa trên xe [49] |

## 3. Management Services (IT Device, Company Registration)
| Service | Method | Endpoint | Chức năng |
|:---|:---|:---|:---|
| IT Device | POST | `/admin/computer` | Quản lý thông tin và cấu hình máy tính [50] |
| IT Device | POST | `/admin/printer` | Quản lý thiết bị máy in và IP Range [51] |
| Company Reg | POST | `/admin/visitor` | Quản lý lịch sử khách ghé thăm doanh nghiệp [52] |
| Company Reg | POST | `/security/work-log` | Ghi nhận nhật ký làm việc của các nhà thầu [53] |
4. workflow-engine.md
# Workflow Engine: Cơ chế Thực thi Luồng công việc

Hệ thống sử dụng dịch vụ **efs-service** làm nhân xử lý quy trình. Logic được xây dựng dựa trên sự kết hợp giữa mô hình BPMN và Database-driven execution.

## 1. Định nghĩa quy trình (Workflow Definition)
File `AdminWorkflowDefinitionService.java` chịu trách nhiệm chuyển đổi tệp BPMN thành dữ liệu hệ thống [40, 54]:
- **Parsing**: Sử dụng thư viện Camunda BPMN để đọc cấu trúc XML [40].
- **Mapping**: 
  - Các phần tử `UserTask` được chuyển đổi thành `ActivityDefinition` [55, 56].
  - Các đường nối được lưu thành `TransitionDefinition` [57, 58].
  - Các điều kiện rẽ nhánh (Gateway) được lưu vào `ConditionDefinition` [59, 60].
- **Versioning**: Hỗ trợ lưu trữ nhiều phiên bản của cùng một quy trình để đảm bảo các tiến trình đang chạy không bị ảnh hưởng khi cập nhật định nghĩa mới.

## 2. Thực thi luồng (Workflow Engine)
`WorkflowEngineService.java` là trái tim của hệ thống, điều khiển trạng thái các bước [7, 61]:
- **Xác định người xử lý (`ParticipantResolverService`)**: Tìm kiếm danh sách `assignee` dựa trên chức vụ, phòng ban hoặc đích danh đã cấu hình trong `ParticipantDefinition` [62, 63].
- **Đánh giá điều kiện (`ConditionEvaluationService`)**: Trước khi chuyển bước, Engine sử dụng Jakarta EL để giải mã các biểu thức logic dựa trên dữ liệu người dùng nhập vào Form [64, 65].
- **Tự động hóa (`UserServiceTaskService`)**: Nếu gặp `ServiceTask`, Engine sẽ sử dụng Reflection (qua `ServiceInvoker`) để gọi các Bean Java tương ứng thực thi logic ngầm [62, 66, 67].
- **Audit Logging**: Mọi sự thay đổi trạng thái đều được ghi lại vào các bảng `ChangeProcessStateAudit` và `ChangeWorkItemStateAudit` phục vụ báo cáo và truy vết [59, 68, 69].
5. database-layer.md
# Database Layer: JPA & MyBatis Integration

Hệ thống sử dụng chiến lược **Hybrid Data Access** để tối ưu hóa giữa tính tiện dụng và hiệu năng cao trên nền tảng Microsoft SQL Server.

## 1. Spring Data JPA (Standard CRUD)
Được sử dụng cho hầu hết các thao tác ghi và quản lý thực thể chính.
- **Cấu hình**: Sử dụng `SQLServer2012Dialect` và cơ chế Auditing để tự động điền `created_at`, `created_by` [24, 31, 70].
- **Repository**: Kế thừa `JpaRepository` cho các tác vụ CRUD nhanh [35, 71-73].
- **Soft Delete**: Các bảng quan trọng như Product, Category trong WMS sử dụng `BaseSoftDeleteEntity` để đánh dấu xóa thay vì xóa vật lý [74, 75].

## 2. MyBatis (High-Performance Queries)
Sử dụng cho các tác vụ tra cứu phức tạp, báo cáo thống kê cần tối ưu SQL thủ công.
- **Mappers**: Các file XML định nghĩa query nằm trong thư mục `sqlmap` (ví dụ: `UserDashboardMapper.xml`, `InventoryMapper.xml`) [8, 62, 76].
- **Type Handlers**: Tùy biến cách chuyển đổi dữ liệu từ DB lên Java (như `DateTimeToStringTypeHandler`, `StringListTypeHandler`) [77-79].
- **Dynamic SQL**: Sử dụng các thẻ `<where>`, `<if>`, `<foreach>` để xây dựng câu truy vấn động dựa trên tham số lọc từ Client [80].

## 3. Dynamic Data Source
Đặc biệt, hệ thống hỗ trợ `DynamicDataSourceManager` cho phép kết nối đến các Database cũ (Legacy DB) để đồng bộ dữ liệu hoặc thực thi các SQL Clause động do Admin cấu hình [81-83].
6. setup-guide.md
# Hướng dẫn Cài đặt Hệ thống

Hệ thống cần được triển khai theo đúng trình tự để đảm bảo các dịch vụ có thể phát hiện và liên lạc được với nhau.

## 1. Thứ tự triển khai
1. **eureka-server**: Phải khởi động đầu tiên để các dịch vụ khác có chỗ đăng ký [2].
2. **auth-service**: Cần thiết cho các dịch vụ khác thực hiện xác thực chéo [84].
3. **api-gateway**: Khởi động sau khi Eureka đã nhận diện được các dịch vụ rest [22].
4. **Business Services**: Các dịch vụ EFS, WMS, Vehicle, IT Device có thể khởi động song song sau đó.

## 2. Các biến môi trường (Environment Variables) quan trọng
Bạn cần cấu hình các biến sau trong tệp `.env` hoặc hệ thống CI/CD:

- **Security & JWT**:
  - `CI_SECRET_KEY`: Khóa bí mật dùng để ký token JWT [32, 70].
  - `CI_EXPIRATION`: Thời gian hết hạn của token [32, 70].
- **LDAP Integration**:
  - `CI_LDAP_URL`: URL máy chủ LDAP [24].
  - `CI_LDAP_USERNAME` / `CI_LDAP_PASSWORD`: Thông tin quản trị để đồng bộ User [24].
- **Database**:
  - `SPRING_DATASOURCE_URL`: URL kết nối MSSQL [24].
  - `SPRING_DATASOURCE_USERNAME` / `SPRING_DATASOURCE_PASSWORD`.
- **Infrastructure**:
  - `CI_EUREKA_HOSTNAME`: Hostname của Eureka Server [85].
  - `CI_FILE_DIRECTORY`: Đường dẫn lưu trữ tệp tin upload [86].

## 3. Triển khai bằng Docker
Dự án cung cấp `Dockerfile` hỗ trợ multi-stage build dựa trên môi trường Windows Server Core [87, 88].
```bash
# Ví dụ build và chạy API Gateway
docker build -t ops/api-gateway:1.0 .
docker run -e SPRING_PROFILES_ACTIVE=dev -p 8081:8081 ops/api-gateway:1.0