import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './index.less';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('nodeName', {
            rules: [
              {
                required: true,
                message: '请输入节点名称！',
              },
            ],
          })(
            <Input
              prefix={
                <Icon
                  type="user"
                  style={{
                    color: 'rgba(0,0,0,.25)',
                  }}
                />
              }
              placeholder="节点名称"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            添加
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({
  name: 'normal_login',
})(NormalLoginForm);
export default props => (
  <div id="components-form-demo-normal-login">
    <WrappedNormalLoginForm {...props} />
  </div>
);
