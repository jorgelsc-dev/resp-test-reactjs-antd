import React from 'react';

import {
  Typography,
  Input,  
  Col,
  Avatar,
  Skeleton,
  Space,
  Divider,
  Card,
 } from 'antd';
 import { 
  LockOutlined,
  ArrowLeftOutlined,
  ReloadOutlined
} from '@ant-design/icons';

function AppPreview({nameSpace, URLSpace, color, logo}){
  return (
    <>
        <Col 
            id='col-preview'
            style={{padding: '20px'}}
            xs={{
                span: 0,
                offset: 0
            }}
            sm={{
                span: 0,
                offset: 0
            }}
            md={{
                span: 12,
                offset: 2
            }}
            lg={{
                span: 12,
                offset: 2
            }}
            xl={{
                span: 12,
                offset: 2
            }}
            xxl={{
                span:12,
                offset:2
            }}
        >
          <Space>
            <Typography.Text keyboard>Plankton - {nameSpace}</Typography.Text>
          </Space>
          <Divider/>
            <Input
              prefix={<><ArrowLeftOutlined /><ReloadOutlined /><LockOutlined id='ico-secure'/></>}
              value={URLSpace}
            />
         
          <Space direction="vertical" size={16}></Space>
          <Card id='preview_card_skeleton' style={{margin:'10px', borderColor: color, borderWidth: '8px'}}>
            <Avatar src={<img src={logo} alt="avatar" />} />
            <Skeleton
              active
              style={{marginTop:'40px', backgroundColor: color}}
              avatar
              paragraph={{
                rows: 4,
              }}
            />
          </Card>
        </Col>
    </>
  );
}
export default AppPreview;