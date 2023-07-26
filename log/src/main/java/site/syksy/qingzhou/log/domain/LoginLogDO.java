package site.syksy.qingzhou.log.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author shell_ya
 * 登录日志实体类
 */

@TableName("s_login_log")
public class LoginLogDO extends BaseEntity implements Serializable {

    private static final long serialVersionUID = -8267165758493168274L;

    @TableId(type = IdType.ASSIGN_ID)
    private Long id;

    @TableField("login_time")
    private LocalDateTime loginTime;

    @TableField("logout_time")
    private LocalDateTime logoutTime;

    @TableField("account_id")
    private Long accountId;

    @TableField("session_id")
    private Long sessionId;

    @TableField("address_ip")
    private String addressIp;

    @TableField("operator_type")
    private String operatorType;

    @TableField("execute_status")
    private Boolean executeStatus;

    @TableField("execute_error_msg")
    private String executeErrorMSg;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(LocalDateTime loginTime) {
        this.loginTime = loginTime;
    }

    public LocalDateTime getLogoutTime() {
        return logoutTime;
    }

    public void setLogoutTime(LocalDateTime logoutTime) {
        this.logoutTime = logoutTime;
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

    public String getOperatorType() {
        return operatorType;
    }

    public void setOperatorType(String operatorType) {
        this.operatorType = operatorType;
    }

    public Boolean getExecuteStatus() {
        return executeStatus;
    }

    public void setExecuteStatus(Boolean executeStatus) {
        this.executeStatus = executeStatus;
    }

    public String getExecuteErrorMSg() {
        return executeErrorMSg;
    }

    public void setExecuteErrorMSg(String executeErrorMSg) {
        this.executeErrorMSg = executeErrorMSg;
    }
}
