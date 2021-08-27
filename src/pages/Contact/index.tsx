import React from 'react';
import styles from './index.less';
import { Card, Col, Descriptions, Divider, Row, Space } from 'antd';

export default function Page() {
  return (
    <div style={{ width: '100%' }}>
      <Row justify={'center'}>
        <Col className={styles.contact} xs={2} sm={4} md={6} lg={8} xl={10}>
          <h1 className={styles.title}>CONTACT US</h1>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col className={styles.content}>
          <p>
            For inquiries related to the analysis of the data, please contact us
            at pjia@big.ac.cn. For all other matters, please refer to the
            information below.
          </p>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Space>
          <Descriptions title="Team Leader" bordered>
            <Descriptions.Item label="Name" span={3}>
              Peilin Jia
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={3}>
              pjia@big.ac.cn
            </Descriptions.Item>
            {/*<Descriptions.Item label="Live">*/}
            {/*  Hangzhou, Zhejiang*/}
            {/*</Descriptions.Item>*/}
            {/*<Descriptions.Item label="Remark">empty</Descriptions.Item>*/}
            <Descriptions.Item label="Contribution">
              Supervisor
            </Descriptions.Item>
          </Descriptions>
          <Descriptions title="Data Analysis" bordered>
            <Descriptions.Item label="Name" span={3}>
              Yin-Ying Wang
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={3}>
              wangyinying@big.ac.cn
            </Descriptions.Item>
            {/*<Descriptions.Item label="Live">*/}
            {/*  Hangzhou, Zhejiang*/}
            {/*</Descriptions.Item>*/}
            {/*<Descriptions.Item label="Remark">empty</Descriptions.Item>*/}
            <Descriptions.Item label="Contribution">
              Data collection, Meta Curation, Data analysis.
            </Descriptions.Item>
          </Descriptions>
          <Descriptions title="Web Development" bordered>
            <Descriptions.Item label="Name" span={3}>
              Hongen Kang
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={3}>
              kanghongen2018m@big.ac.cn
            </Descriptions.Item>
            {/*<Descriptions.Item label="Live">*/}
            {/*  Hangzhou, Zhejiang*/}
            {/*</Descriptions.Item>*/}
            {/*<Descriptions.Item label="Remark">empty</Descriptions.Item>*/}
            <Descriptions.Item label="Contribution">
              Web Development,Meta Curation.
            </Descriptions.Item>
          </Descriptions>
        </Space>
      </Row>
    </div>
  );
}
