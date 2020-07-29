import React, { PureComponent, ChangeEvent, MouseEvent } from 'react';
import { Button, FormLabel, Input, Tooltip } from '@grafana/ui';
import { User } from 'app/types';
import config from 'app/core/config';
import { ProfileUpdateFields } from 'app/core/utils/UserProvider';

export interface Props {
  user: User;
  isSavingUser: boolean;
  updateProfile: (payload: ProfileUpdateFields) => void;
}

export interface State {
  name: string;
  email: string;
  login: string;
}

export class UserProfileEditForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const {
      user: { name, email, login },
    } = this.props;

    this.state = {
      name,
      email,
      login,
    };
  }

  onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  onLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ login: event.target.value });
  };

  onSubmitProfileUpdate = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.props.updateProfile({ ...this.state });
  };

  render() {
    const { name, email, login } = this.state;
    const { isSavingUser } = this.props;
    const { disableLoginForm } = config;

    return (
      <>
        <h3 className="page-sub-heading">编辑配置文件</h3>
        <form name="userForm" className="gf-form-group">
          <div className="gf-form max-width-30">
            <FormLabel className="width-8">名称</FormLabel>
            <Input className="gf-form-input max-width-22" type="text" onChange={this.onNameChange} value={name} />
          </div>
          <div className="gf-form max-width-30">
            <FormLabel className="width-8">邮箱</FormLabel>
            <Input
              className="gf-form-input max-width-22"
              type="text"
              onChange={this.onEmailChange}
              value={email}
              disabled={disableLoginForm}
            />
            {disableLoginForm && (
              <Tooltip content="Login Details Locked - managed in another system.">
                <i className="fa fa-lock gf-form-icon--right-absolute" />
              </Tooltip>
            )}
          </div>
          <div className="gf-form max-width-30">
            <FormLabel className="width-8">用户名</FormLabel>
            <Input
              className="gf-form-input max-width-22"
              type="text"
              onChange={this.onLoginChange}
              value={login}
              disabled={disableLoginForm}
            />
            {disableLoginForm && (
              <Tooltip content="Login Details Locked - managed in another system.">
                <i className="fa fa-lock gf-form-icon--right-absolute" />
              </Tooltip>
            )}
          </div>
          <div className="gf-form-button-row">
            <Button variant="primary" onClick={this.onSubmitProfileUpdate} disabled={isSavingUser}>
              保存
            </Button>
          </div>
        </form>
      </>
    );
  }
}

export default UserProfileEditForm;
