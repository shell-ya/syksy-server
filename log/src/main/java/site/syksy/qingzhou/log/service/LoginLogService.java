package site.syksy.qingzhou.log.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import site.syksy.qingzhou.log.domain.LoginLogDO;
import site.syksy.qingzhou.log.mapper.LoginLogMapper;

@Service
public class LoginLogService extends ServiceImpl<LoginLogMapper, LoginLogDO> {

    private static final  Logger log = LoggerFactory.getLogger(LoginLogService.class);

}
