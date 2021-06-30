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
  Space,
  Statistic,
} from 'antd';
import { FlagOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { SearchOutlined, LinkOutlined } from '@ant-design/icons';
import { HumanIcon, MouseIcon, CelllineIcon } from '../components/Icons';
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
import mouse from '../assets/mouse.jpg';
import mbrain from '../assets/mbrain.png';
import madipose from '../assets/madipose.png';
import mblood from '../assets/mblood.jpg';
import mbone from '../assets/mbone.png';
import mbladder from '../assets/mbladder.png';
import meye from '../assets/meye.png';
import mgallbladder from '../assets/mgallbladder.png';
import mheart from '../assets/mheart.png';
import mintestine from '../assets/mintestine.png';
import mkidney from '../assets/mkidney.png';
import mliver from '../assets/mliver.png';
import mlung from '../assets/mlung.png';
import movary from '../assets/movary.png';
import mpancreas from '../assets/mpancreas.png';
import mskin from '../assets/mskin.png';
import mspleen from '../assets/mspleen.png';
import mthyroid from '../assets/mthyroid.png';

import React, { useEffect, useState } from 'react';
import { getRemoteTypeKeywords } from '@/pages/Search/service';
import { history } from 'umi';
import { API_PREFIX } from '@/common/constants';
const { Text, Title } = Typography;

export interface searchKeywordsItem {
  type: string;
  name: string;
}
export default function IndexPage() {
  const [searchkey, setSearchkey] = useState<searchKeywordsItem>();
  const [options, setOptions] = useState([]);
  const [bhuman, setBhuman] = useState('primary');
  const [bmouse, setBmouse] = useState('default');
  const [bcellline, setBcellline] = useState('default');
  const [dhuman, setDhuman] = useState();
  const [dmouse, setDmouse] = useState('none');
  const [dcellline, setDcellline] = useState('none');
  // console.log(API_PREFIX);
  const content = (
    <div>
      <p>
        <a href={'/cedr/general/tissue/Brain'}>Brain</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Cancer'}>Cancer</a>
      </p>
    </div>
  );
  // useEffect(() => {
  //   console.log(searchkey);
  // }, [searchkey]);
  return (
    <div>
      <Row justify="center" style={{ background: '#f0f2f5' }}>
        <div>
          <Title level={2} className={styles.introduction}>
            CeDR Atlas: a knowledgebase of cellular drug response
          </Title>
        </div>
      </Row>
      <Divider />
      <Row justify="center">
        <Col xs={18} sm={18} md={18} lg={18} xl={12}>
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
          <span></span>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col xs={16} sm={16} md={16} lg={16} xl={12} push={2}>
          <Row style={{ textAlign: 'center' }}>
            <Col>
              <Text type={'danger'} strong={true} style={{ fontSize: '20px' }}>
                Click the buttons to switch source and the organs to quick
                search
              </Text>
            </Col>
          </Row>
          <Row justify={'center'} style={{ marginTop: '10px' }}>
            <Col md={10}>
              <Space>
                <Button
                  type={bhuman}
                  size={'large'}
                  icon={<HumanIcon />}
                  onClick={() => {
                    setBhuman('primary');
                    setBmouse('default');
                    setBcellline('default');
                    setDhuman('');
                    setDmouse('none');
                    setDcellline('none');
                  }}
                >
                  Human
                </Button>
                <Button
                  type={bmouse}
                  size={'large'}
                  icon={<MouseIcon />}
                  onClick={() => {
                    setBhuman('default');
                    setBmouse('primary');
                    setBcellline('default');
                    setDhuman('none');
                    setDmouse('');
                    setDcellline('none');
                  }}
                >
                  Mouse
                </Button>
                <Button
                  type={bcellline}
                  size={'large'}
                  icon={<CelllineIcon />}
                  onClick={() => {
                    setBhuman('default');
                    setBmouse('default');
                    setBcellline('primary');
                    setDhuman('none');
                    setDmouse('none');
                    setDcellline('');
                  }}
                >
                  Cell Line
                </Button>
              </Space>
            </Col>
          </Row>
          {/*<Divider />*/}
          <Row className={styles.human} style={{ display: dhuman }}>
            <div>
              <img
                src={human}
                style={{
                  width: '350px',
                  height: '550px',
                  display: 'block',
                  marginLeft: '18%',
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
                <Popover content={content} title={'Pancreas'} placement="left">
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
          </Row>

          <Row style={{ display: dcellline }} className={styles.wordcloud}>
            <Wordcloud />
          </Row>
          <Row className={styles.mouse} style={{ display: dmouse }}>
            <div>
              <img
                src={mouse}
                style={{
                  width: '350px',
                  height: '550px',
                  display: 'block',
                  marginLeft: '18%',
                  marginTop: '80px',
                }}
              />
              <div className={styles.mbrain}>
                <Popover content={content} title={'Brain'} placement="right">
                  <img
                    src={mbrain}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mlung}>
                <Popover content={content} title={'Lung'} placement="right">
                  <img
                    src={mlung}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mheart}>
                <Popover content={content} title={'Heart'} placement="right">
                  <img
                    src={mheart}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mliver}>
                <Popover content={content} title={'Liver'} placement="right">
                  <img
                    src={mliver}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mblood}>
                <Popover content={content} title={'Blood'} placement="right">
                  <img
                    src={mblood}
                    style={{ width: '30%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mlargeintestine}>
                <Popover
                  content={content}
                  title={'Large Intestine'}
                  placement="right"
                >
                  <img
                    src={mintestine}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.msmallintestine}>
                <Popover
                  content={content}
                  title={'Small Intestine'}
                  placement="right"
                >
                  <img
                    src={smallintestine}
                    style={{ width: '35%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mbone}>
                <Popover content={content} title={'Bone'} placement="right">
                  <img
                    src={mbone}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.meye}>
                <Popover content={content} title={'Eye'} placement="left">
                  <img
                    src={meye}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mbladder}>
                <Popover content={content} title={'Bladder'} placement="left">
                  <img
                    src={mbladder}
                    style={{ width: '30%', height: '70%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mpancreas}>
                <Popover content={content} title={'Pancreas'} placement="left">
                  <img
                    src={mpancreas}
                    style={{ width: '30%', height: '70%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mspleen}>
                <Popover content={content} title={'Spleen'} placement="left">
                  <img
                    src={mspleen}
                    style={{ width: '30%', height: '70%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.muterus}>
                <Popover content={content} title={'Uterus'} placement="left">
                  <img
                    src={movary}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mskin}>
                <Popover content={content} title={'Skin'} placement="left">
                  <img
                    src={mskin}
                    style={{ width: '30%', height: '70%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mkidney}>
                <Popover content={content} title={'Kidney'} placement="left">
                  <img
                    src={mkidney}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mgallbladder}>
                <Popover
                  content={content}
                  title={'Gallbladder'}
                  placement="left"
                >
                  <img
                    src={mgallbladder}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
            </div>
          </Row>
          {/*<Divider />*/}
          <Row style={{ marginTop: '100px' }}>
            <Divider />
            <div>
              <Title
                level={3}
                className={styles.introduction}
                style={{ textAlign: 'left' }}
              >
                Introduction for CeDR Atlas:
              </Title>
              <Text
                style={{
                  fontFamily: 'Arial',
                  fontSize: '1em',
                  textAlign: 'left',
                }}
                strong={true}
              >
                {
                  'CeDR represents an omnibus systematic exploration of tissue-cell type specific drug response for human,mouse and cell lines. In this work, we collected the fast-growing single-cell transcriptome profiling generated by multiple international consortiums (e.g Human Cell Landscape, Mouse Cell Atlas and CCLE) and other available labeled datasets to conduct the tissue-cell type based drug perturbation analysis. These will help to reveal tissue-cell type specific drug response and further provide insight into identifying potential side effects, repositioned drugs and even combination therapies. Currently, CeDR maintained the results for more than 270 single cell data objects for human, mouse and cell lines, including more than 34 tissues and 700 tissue-cell combination types. In summary, we identified a total of *** significant drug-cell type associations (Enriched p-value<0.05, Correlation p-value<0.01). Users can browse and search the drugs, cell types, tissues, diseases and could also filter and prioritize the associations with exact gene signatures. Overall, CeDR finemaps drug response at cellular resolution and sheds light on the potential of drug combinations. For detail of usage of this database please see the documentation.'
                }
              </Text>
            </div>
          </Row>
        </Col>
        <Col xs={5} sm={5} md={5} lg={7} xl={7} push={4}>
          <Card
            title={<strong>Resource Overview</strong>}
            extra={<a href="/cedr/general">More</a>}
            style={{ width: 300 }}
            bordered={true}
            hoverable={true}
          >
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Studies</strong>}
                value={70}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Datasets</strong>}
                value={169}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Tissues</strong>}
                value={20}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Cell Types</strong>}
                value={300}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Diseases</strong>}
                value={32}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Drugs</strong>}
                value={3000}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
          </Card>
          <Divider />
          <Card
            title={<strong>Recent Events</strong>}
            style={{ width: 300 }}
            bordered={true}
            hoverable={true}
          >
            <Timeline>
              <Timeline.Item>
                Network problems being solved 2021-06-22
              </Timeline.Item>
              <Timeline.Item>Technical testing 2021-06-18</Timeline.Item>
              <Timeline.Item>
                Solve initial network problems 2021-06-08
              </Timeline.Item>
              <Timeline.Item>Create a services site 2021-06-01</Timeline.Item>
            </Timeline>
          </Card>
          <Divider />
          <Card
            title={<strong>Exteneral Link</strong>}
            style={{ width: 300 }}
            bordered={true}
            hoverable={true}
          >
            <p>
              <a href={'https://www.ncbi.nlm.nih.gov/geo'}>
                {' '}
                <LinkOutlined />
                &nbsp;GEO{' '}
              </a>
            </p>
            <p>
              <a href={'https://singlecell.broadinstitute.org/single_cell'}>
                {' '}
                <LinkOutlined />
                &nbsp;Single Cell portal{' '}
              </a>
            </p>
            <p>
              <a href={'http://bis.zju.edu.cn/MCA/'}>
                {' '}
                <LinkOutlined />
                &nbsp;Mouse Cell Atlas{' '}
              </a>
            </p>
            <p>
              <a href={'https://db.cngb.org/HCL/'}>
                <LinkOutlined />
                &nbsp;Human Cell Landscape
              </a>
            </p>
            <p>
              <a href={'https://www.broadinstitute.org/connectivity-map-cmap'}>
                <LinkOutlined />
                &nbsp;Connectivity Map{' '}
              </a>
            </p>
            <p>
              <a href={'https://go.drugbank.com/'}>
                <LinkOutlined />
                &nbsp;Drug Bank{' '}
              </a>
            </p>
            <p>
              <a href={'https://ngdc.cncb.ac.cn/'}>
                <LinkOutlined />
                &nbsp;National Genomics Data Center
              </a>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
