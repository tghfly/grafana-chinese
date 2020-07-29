import React, { useContext } from 'react';
import { css } from 'emotion';
import { ThemeContext, LinkButton, CallToActionCard } from '@grafana/ui';

export const NoDataSourceCallToAction = () => {
  const theme = useContext(ThemeContext);

  const message = '探索模式需要添加至少一个数据源. 然后才能用探索模式来查询.';
  const footer = (
    <>
      <i className="fa fa-rocket" />
      <> 小贴士: 您也可以通过配置文件来定义数据源. </>
      <a
        href="http://docs.grafana.org/administration/provisioning/#datasources?utm_source=explore"
        target="_blank"
        rel="noopener"
        className="text-link"
      >
        了解更多
      </a>
    </>
  );

  const ctaElement = (
    <LinkButton size="lg" href="/datasources/new" icon="gicon gicon-datasources">
      添加数据源
    </LinkButton>
  );

  const cardClassName = css`
    max-width: ${theme.breakpoints.lg};
    margin-top: ${theme.spacing.md};
    align-self: center;
  `;

  return (
    <CallToActionCard
      callToActionElement={ctaElement}
      className={cardClassName}
      footer={footer}
      message={message}
      theme={theme}
    />
  );
};
