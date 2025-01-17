/*
 * Copyright 2020-2030 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package site.syksy.qingzhou.generator.constant;

/**
 * @author Raspberry
 */
public interface Generator {

    interface Genre {
        String CONTROLLER = "controller";
        String SERVICE = "service";
        String DOMAIN = "domain";
        String MAPPER = "mapper";
        String MAPPER_XML = "xml";
    }

    interface TemplateMap{
        String PACKAGE_PATH = "packagePath";
        String AUTHOR = "author";
        String SINCE = "date";
        String ID_TYPE = "idType";
        String TABLE = "table";
        String TABLE_NAME = "tableName";
        String CONTROLLER_NAME = "controllerName";
        String SERVICE_NAME = "serviceName";
        String DOMAIN_NAME = "domainName";
        String MAPPER_NAME = "mapperName";
    }
}
