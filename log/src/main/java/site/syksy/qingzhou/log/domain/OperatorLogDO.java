package site.syksy.qingzhou.log.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author Raspberry
 * 操作日志实体类
 */
@TableName("s_operator_log")
public class OperatorLogDO extends BaseEntity implements Serializable {

    private static final long serialVersionUID = -7942041153672497079L;

    @TableId(type = IdType.ASSIGN_ID)
    private Long id;
    @TableField("operator_start_time")
    private LocalDateTime operatorStartTime;
    @TableField("operator_end_time")
    private LocalDateTime operatorEndTime;
    @TableField("url")
    private String url;
    @TableField("method_type")
    private String methodType;
    @TableField("method_name")
    private String methodName;
    @TableField("account_id")
    private Long accountId;
    @TableField("session_id")
    private Long sessionId;

    @TableField("address_ip")
    private String addressIp;

    @TableField("in_params")
    private String inParams;
    @TableField("out_params")
    private String outParams;
    @TableField("status_code")
    private String statusCode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getOperatorStartTime() {
        return operatorStartTime;
    }

    public void setOperatorStartTime(LocalDateTime operatorStartTime) {
        this.operatorStartTime = operatorStartTime;
    }

    public LocalDateTime getOperatorEndTime() {
        return operatorEndTime;
    }

    public void setOperatorEndTime(LocalDateTime operatorEndTime) {
        this.operatorEndTime = operatorEndTime;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getMethodType() {
        return methodType;
    }

    public void setMethodType(String methodType) {
        this.methodType = methodType;
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public Long getSessionId() {
        return sessionId;
    }

    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
    }

    public String getAddressIp() {
        return addressIp;
    }

    public void setAddressIp(String addressIp) {
        this.addressIp = addressIp;
    }

    public String getInParams() {
        return inParams;
    }

    public void setInParams(String inParams) {
        this.inParams = inParams;
    }

    public String getOutParams() {
        return outParams;
    }

    public void setOutParams(String outParams) {
        this.outParams = outParams;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(String statusCode) {
        this.statusCode = statusCode;
    }
}
