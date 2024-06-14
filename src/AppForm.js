import React from 'react';
import { Button, 
  Typography,
  Input, 
  Radio, 
  Col,
  Upload,
  Avatar,
  Divider,
 } from 'antd';
 import { 
  WarningOutlined, 
  UploadOutlined
} from '@ant-design/icons';

function AppForm({logo,uploadLogo,changeNameSpace,changeURLSpace,changeColor,changeNumPers,submit}){
  return (
    <>
        <Col
            xs={{
                span: 24,
                offset: 0
            }}
            sm={{
                span: 24,
                offset: 0
            }}
            md={{
                span: 10,
                offset: 0
            }}
            lg={{
                span: 10,
                offset: 0
            }}
            xl={{
                span: 10,
                offset: 0
            }}
            xxl={{
                span:10,
                offset:0
            }}
            style={{padding: '40px'}}
        >
            <h2>Configuración</h2>
            <h4>Logo del espacio</h4>
            <Avatar id='logo-space' src={logo} />
            <Upload
                listType='picture'
                beforeUpload={uploadLogo}
                maxCount={1}
                onPreview={null}
            >
                <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <WarningOutlined 
                style={{marginTop:'10px', marginRight:'7px'}}
            />
            <Typography.Text type="secondary">
                Este logo identificará tu espacio entre el resto.
            </Typography.Text>
            <Typography.Text style={{marginTop: '7px', marginBottom: '7px'}} type="secondary">
                Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparete.
            </Typography.Text>
            <Typography.Title level={5}>Nombre del espacio</Typography.Title>
            <Input
                placeholder='EP: Mi espacio de trabajo'
                onChange={changeNameSpace}
            />
            <Typography.Title level={5}>URL del espacio (dirección web)</Typography.Title>
            <Input
                placeholder='EP: mi.dominio'
                suffix='.dofleini.com'
                onChange={changeURLSpace}
                style={{width: '100%'}}
            />
            <WarningOutlined style={{marginTop: '20px', marginRight: '10px'}} />
            <Typography.Text type="secondary">
                Puedes cambiar la URL de tu espacio (dirección web) en cualquier momento, pero pero
                cortesía hacia tus compañeros de trabajo y otros usuarios de Plankton, porfavor no
                lo hagas muy seguido :)
                Nota: Si cambias la URL de tu espacio, Plankton automáticamente redireccionará desde la
                antigua dirección hacia la nueva. En cualquier caso, deberías asegurarte que tus compañeros
                sepan acerca del cambio porque la dirección anterior pasará  a estar libre y
                puede ser usada por otro espacio en el futuro.
            </Typography.Text>
            <Typography.Title level={5}>¿Cuántas personas trabajarán contigo, incluyéndote a ti?</Typography.Title>
            <Radio.Group
                onChange={changeNumPers}
            >
                <Radio value="1">Sólo yo</Radio>
                <Radio value="2-10">2 - 10</Radio>
                <Radio value="11-25">11 - 25</Radio>
                <Radio value="26-50">26 - 50</Radio>
                <Radio value="51-100">51 - 100</Radio>
                <Radio value="500">500 +</Radio>
            </Radio.Group>
            <WarningOutlined style={{marginTop: '20px', marginRight:'10px'}}/>
            <Typography.Text type="secondary">
                Este logo identificará tu espacio entre el resto.
            </Typography.Text>
            <Typography.Title level={5}>Color del tema</Typography.Title>
            <Radio.Group
                onChange={changeColor}
            >
                <Radio value="#39b0ff" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#39b0ff' }} /></Radio>
                <Radio value="#04b58b" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#04b58b' }} /></Radio>
                <Radio value="#3e9c4b" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#3e9c4b' }} /></Radio>
                <Radio value="#b6bc00" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#b6bc00' }} /></Radio>
                <Radio value="#e59100" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#e59100' }} /></Radio>
                <Radio value="#e55c00" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#e55c00' }} /></Radio>
                <Radio value="#ee1f50" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#ee1f50' }} /></Radio>
                <Radio value="#d6198a" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#d6198a' }} /></Radio>
                <Radio value="#b321f1" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#b321f1' }} /></Radio>
                <Radio value="#48b5fe" style={{margin: '4px'}}><Avatar style={{ backgroundColor: '#48b5fe' }} /></Radio>
            </Radio.Group>
            <Divider/>
            <Button type="primary" onClick={submit}
                style={{margin:'20px'}}
            >
                Submit
            </Button>
        </Col>
    </>
  );
}
export default AppForm;