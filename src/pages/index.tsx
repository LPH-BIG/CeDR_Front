import styles from './index.less';
import {
  Col,
  Row,
  Tag,
  Divider,
  Card,
  Timeline,
  Typography,
  Select,
  Button,
  Popover,
} from 'antd';
import { FlagOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import Wordcloud from '../components/wordcloud';
import human from '../assets/human1.jpg';
import heart from '../assets/heart.png';
import bladder from '../assets/bladder.png';
import brain from '../assets/brain.png';
import gallbladder from '../assets/gallbladder.png';
import kidney from '../assets/kidney.png';
import largeintestine from '../assets/largeintestine.png';
import liver from '../assets/liver.png';
import lung from '../assets/lung.png';
import pancreas from '../assets/pancreas.png';
import smallintestine from '../assets/smallintestine.png';
import spleen from '../assets/spleen.png';
import stomach from '../assets/stomach.png';
import uterus from '../assets/uterus.png';
import blood from '../assets/blood.png';
import skin from '../assets/skin.png';
import bone from '../assets/bone.png';
import eye from '../assets/eye.png';
import React, { useEffect, useState } from 'react';
import { getRemoteTypeKeywords } from '@/pages/Search/service';
import { history } from 'umi';
import { API_PREFIX } from '@/common/constants';
const { Text, Title } = Typography;

interface searchKeywordsItem {
  type: string;
  name: string;
}
export default function IndexPage() {
  const [searchkey, setSearchkey] = useState<searchKeywordsItem>();
  const [options, setOptions] = useState([]);
  console.log(API_PREFIX);
  const content = (
    <div>
      <p>
        <a href={'/general'}>cell type 1</a>
      </p>
      <p>
        <a href={'/general'}>cell type 2</a>
      </p>
    </div>
  );
  // useEffect(() => {
  //   console.log(searchkey);
  // }, [searchkey]);
  return (
    <div>
      <Row justify="center">
        <div>
          <Title level={2} className={styles.introduction}>
            CeDR Atlas: a knowledgebase about cellular drug response.
          </Title>
          <Text>
            Previously, we developed an algorithm, deTS (R package) to decode
            tissue specificity and built the Tissue-Specific Enrichment Analysis
            DataBase (TSEA-DB). In this work, we leveraged the fast-growing
            single-cell transcriptome profiling for human tissues generated by
            multiple international consortiums (e.g. Human Cell Landscape, The
            Human Lung Cell Atlas) and literature resources to conduct the cell
            type-specific enrichment analysis (CSEA) modified from deTS.
          </Text>
        </div>
      </Row>
      <Divider />
      <Row justify="center">
        <Col xs={2} sm={4} md={12} lg={12} xl={12}>
          <Select
            style={{ width: '70%' }}
            placeholder="input and select a keyword"
            showSearch={true}
            allowClear={true}
            onSearch={(value: string) => {
              getRemoteTypeKeywords(value).then((res) => {
                const op = res.data.map((item) => (
                  <Select.Option
                    key={item.id}
                    value={item.name}
                    type={item.type}
                  >
                    <Tag
                      icon={<FlagOutlined />}
                      style={{ float: 'left', color: '#3D84B8' }}
                    >
                      {item.type} is
                    </Tag>
                    <Tag
                      icon={<EnvironmentOutlined />}
                      style={{ float: 'right' }}
                    >
                      {item.name}
                    </Tag>
                  </Select.Option>
                ));
                setOptions(op);
              });
            }}
            onChange={(value, option) => {
              if (option) {
                setSearchkey({ type: option.type, name: value });
                // console.log(searchkey);
              }
            }}
          >
            {options}
          </Select>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => {
              history.push(
                '/general/' + searchkey?.type + '/' + searchkey?.name,
              );
            }}
          >
            Search
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col
          xs={4}
          sm={6}
          md={12}
          lg={12}
          xl={12}
          style={{ textAlign: 'center' }}
        >
          <strong style={{ fontSize: '20px' }}>Human Tissues</strong>
          <Row className={styles.human}>
            <Col xs={4} sm={6} md={12} lg={12} xl={12} push={1}>
              <div>
                <img
                  src={human}
                  style={{
                    width: '50%',
                    height: '80%',
                    display: 'block',
                    marginLeft: '120px',
                  }}
                />
                <div className={styles.brain}>
                  <Popover content={content} title={'Brain'} placement="right">
                    <img
                      src={brain}
                      style={{ width: '35%', height: '70%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.lung}>
                  <Popover content={content} title={'Lung'} placement="right">
                    <img
                      src={lung}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.heart}>
                  <Popover content={content} title={'Heart'} placement="right">
                    <img
                      src={heart}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.liver}>
                  <Popover content={content} title={'Liver'} placement="right">
                    <img
                      src={liver}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.blood}>
                  <Popover content={content} title={'Blood'} placement="right">
                    <img
                      src={blood}
                      style={{ width: '35%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.largeintestine}>
                  <Popover
                    content={content}
                    title={'Large Intestine'}
                    placement="right"
                  >
                    <img
                      src={largeintestine}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.smallintestine}>
                  <Popover
                    content={content}
                    title={'Small Intestine'}
                    placement="right"
                  >
                    <img
                      src={smallintestine}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.bone}>
                  <Popover content={content} title={'Bone'} placement="right">
                    <img
                      src={bone}
                      style={{ width: '30%', height: '60%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.eye}>
                  <Popover content={content} title={'Eye'} placement="left">
                    <img
                      src={eye}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.bladder}>
                  <Popover content={content} title={'Bladder'} placement="left">
                    <img
                      src={bladder}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.pancreas}>
                  <Popover
                    content={content}
                    title={'Pancreas'}
                    placement="left"
                  >
                    <img
                      src={pancreas}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.spleen}>
                  <Popover content={content} title={'Spleen'} placement="left">
                    <img
                      src={spleen}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.uterus}>
                  <Popover content={content} title={'Uterus'} placement="left">
                    <img
                      src={uterus}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.skin}>
                  <Popover content={content} title={'Skin'} placement="left">
                    <img
                      src={skin}
                      style={{ width: '36%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.kidney}>
                  <Popover content={content} title={'Kidney'} placement="left">
                    <img
                      src={kidney}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
                <div className={styles.gallbladder}>
                  <Popover
                    content={content}
                    title={'Gallbladder'}
                    placement="left"
                  >
                    <img
                      src={gallbladder}
                      style={{ width: '40%', height: '80%', display: 'block' }}
                    />
                  </Popover>
                </div>
              </div>
              <div></div>
            </Col>
            <Col xs={4} sm={6} md={10} lg={10} xl={10}></Col>
          </Row>
        </Col>
        <Col xs={4} sm={6} md={12} lg={12} xl={12}>
          <Wordcloud />
          <Divider />
          <Row>
            <Col xs={2} sm={4} md={10} lg={10} xl={10}>
              <Card
                title="Resource Overview"
                extra={<a href="/general">More</a>}
                style={{ width: 300 }}
                bordered={true}
                hoverable={true}
              >
                <p>22 Cell Lines</p>
                <p>16 Tissues</p>
                <p>100 Datasets</p>
                <p>30 Diseases</p>
              </Card>
            </Col>
            <Col xs={2} sm={4} md={10} lg={10} xl={10} push={2}>
              <Card
                title="Recent Events"
                style={{ width: 300 }}
                bordered={true}
                hoverable={true}
              >
                <Timeline>
                  <Timeline.Item>
                    Create a services site 2021-06-01
                  </Timeline.Item>
                  <Timeline.Item>
                    Solve initial network problems 2021-06-08
                  </Timeline.Item>
                  <Timeline.Item>Technical testing 2021-06-18</Timeline.Item>
                  <Timeline.Item>
                    Network problems being solved 2021-06-22
                  </Timeline.Item>
                </Timeline>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
