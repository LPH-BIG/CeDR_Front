import styles from './index.less';
import {
  Col,
  Input,
  Row,
  Breadcrumb,
  Divider,
  Card,
  Timeline,
  Typography,
} from 'antd';
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

const { Search } = Input;
export default function IndexPage() {
  const onSearch = (value: any) => {
    console.log(value);
  };

  return (
    <div>
      <Row justify="center">
        <div>
          <strong className={styles.introduction}>
            CeDR Atlas is a knowledgebase about cellular drug response.
          </strong>
          <Typography>
            Previously, we developed an algorithm, deTS (R package) to decode
            tissue specificity and built the Tissue-Specific Enrichment Analysis
            DataBase (TSEA-DB). In this work, we leveraged the fast-growing
            single-cell transcriptome profiling for human tissues generated by
            multiple international consortiums (e.g. Human Cell Landscape, The
            Human Lung Cell Atlas) and literature resources to conduct the cell
            type-specific enrichment analysis (CSEA) modified from deTS.
          </Typography>
        </div>
        <Divider />
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <Search
            placeholder="input and select keyword"
            enterButton="Search"
            bordered={true}
            size="large"
            onSearch={onSearch}
            // suffix={suffix}
          />
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
                  <img
                    src={brain}
                    style={{ width: '35%', height: '70%', display: 'block' }}
                  />
                </div>
                <div className={styles.lung}>
                  <img
                    src={lung}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.heart}>
                  <img
                    src={heart}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.liver}>
                  <img
                    src={liver}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.blood}>
                  <img
                    src={blood}
                    style={{ width: '35%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.largeintestine}>
                  <img
                    src={largeintestine}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.smallintestine}>
                  <img
                    src={smallintestine}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.bone}>
                  <img
                    src={bone}
                    style={{ width: '30%', height: '60%', display: 'block' }}
                  />
                </div>
                <div className={styles.eye}>
                  <img
                    src={eye}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.bladder}>
                  <img
                    src={bladder}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.pancreas}>
                  <img
                    src={pancreas}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.spleen}>
                  <img
                    src={spleen}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.uterus}>
                  <img
                    src={uterus}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.skin}>
                  <img
                    src={skin}
                    style={{ width: '36%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.kidney}>
                  <img
                    src={kidney}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </div>
                <div className={styles.gallbladder}>
                  <img
                    src={gallbladder}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
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
                extra={<a href="/browse">More</a>}
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

      <Row>
        <Col xs={4} sm={6} md={10} lg={10} xl={10}>
          {/*<Tsne />*/}
        </Col>
      </Row>
    </div>
  );
}
