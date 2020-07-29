import React, { PureComponent } from 'react';
import { User } from 'app/types';
import { UserOrg } from 'app/core/utils/UserProvider';
import { LoadingPlaceholder, Button } from '@grafana/ui';

export interface Props {
  user: User;
  orgs: UserOrg[];
  isLoading: boolean;
  loadOrgs: () => void;
  setUserOrg: (org: UserOrg) => void;
}

export class UserOrganizations extends PureComponent<Props> {
  componentDidMount() {
    this.props.loadOrgs();
  }

  render() {
    const { isLoading, orgs, user } = this.props;

    if (isLoading) {
      return <LoadingPlaceholder text="加载组织信息..." />;
    }

    return (
      <>
        {orgs.length > 0 && (
          <>
            <h3 className="page-sub-heading">组织</h3>
            <div className="gf-form-group">
              <table className="filter-table form-inline">
                <thead>
                  <tr>
                    <th>名称</th>
                    <th>角色</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {orgs.map((org: UserOrg, index) => {
                    return (
                      <tr key={index}>
                        <td>{org.name}</td>
                        <td>{org.role}</td>
                        <td className="text-right">
                          {org.orgId === user.orgId ? (
                            <span className="btn btn-primary btn-small">当前组织</span>
                          ) : (
                            <Button
                              variant="inverse"
                              size="sm"
                              onClick={() => {
                                this.props.setUserOrg(org);
                              }}
                            >
                              Select
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </>
    );
  }
}

export default UserOrganizations;
