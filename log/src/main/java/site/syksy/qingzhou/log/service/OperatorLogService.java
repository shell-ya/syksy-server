package site.syksy.qingzhou.log.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import site.syksy.qingzhou.log.domain.OperatorLogDO;
import site.syksy.qingzhou.log.mapper.OperatorLogMapper;

@Service
public class OperatorLogService extends ServiceImpl<OperatorLogMapper, OperatorLogDO> {

    private static final Logger log = LoggerFactory.getLogger(OperatorLogService.class);
}
