import React, { PureComponent, MouseEvent } from 'react';
import config from 'app/core/config';
import { Button, LinkButton } from '@grafana/ui';
import { ChangePasswordFields } from 'app/core/utils/UserProvider';
import { PasswordInput } from 'app/core/components/PasswordInput/PasswordInput';

export interface Props {
  isSaving: boolean;
  onChangePassword: (payload: ChangePasswordFields) => void;
}

export interface State {
  oldPassword: string;
  newPassword: string;
  confirmNew: string;
}

export class ChangePasswordForm extends PureComponent<Props, State> {
  state: State = {
    oldPassword: '',
    newPassword: '',
    confirmNew: '',
  };

  onOldPasswordChange = (oldPassword: string) => {
    this.setState({ oldPassword });
  };

  onNewPasswordChange = (newPassword: string) => {
    this.setState({ newPassword });
  };

  onConfirmPasswordChange = (confirmNew: string) => {
    this.setState({ confirmNew });
  };

  onSubmitChangePassword = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.props.onChangePassword({ ...this.state });
  };

  render() {
    const { oldPassword, newPassword, confirmNew } = this.state;
    const { isSaving } = this.props;
    const { ldapEnabled, authProxyEnabled } = config;

    if (ldapEnabled || authProxyEnabled) {
      return <p>You cannot change password when ldap or auth proxy authentication is enabled.</p>;
    }

    return (
      <form name="userForm" className="gf-form-group">
        <div className="gf-form max-width-30">
          <PasswordInput label="旧密码" onChange={this.onOldPasswordChange} value={oldPassword} />
        </div>
        <div className="gf-form max-width-30">
          <PasswordInput label="新密码" onChange={this.onNewPasswordChange} value={newPassword} />
        </div>
        <div className="gf-form max-width-30">
          <PasswordInput label="确认密码" onChange={this.onConfirmPasswordChange} value={confirmNew} />
        </div>
        <div className="gf-form-button-row">
          <Button variant="primary" onClick={this.onSubmitChangePassword} disabled={isSaving}>
            更改密码
          </Button>
          <LinkButton variant="transparent" href={`${config.appSubUrl}/profile`}>
            取消
          </LinkButton>
        </div>
      </form>
    );
  }
}

export default ChangePasswordForm;
