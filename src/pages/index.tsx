import styles from './index.less';
import { Col, Input, Row, Breadcrumb } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Pie from '../components/Pie';
import Tsne from '../components/Tsne';
import Network from '../components/Network';
import human from '../assets/human.png';
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

const { Search } = Input;
export default function IndexPage() {
  const onSearch = (value: any) => {
    console.log(value);
  };

  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  return (
    <div>
      <Row justify="center">
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            // suffix={suffix}
          />
        </Col>
      </Row>
      <Row className={styles.human}>
        <Col xs={4} sm={6} md={12} lg={12} xl={12} push={1}>
          <div>
            <img
              src={human}
              style={{ width: '50%', height: '80%', display: 'block' }}
            />
            <div className={styles.brain}>
              <img
                src={brain}
                style={{ width: '40%', height: '80%', display: 'block' }}
              />
              {/*<div className="clickText clickTextRight textOpacity" style={{display:"block"}} id="Brain1">*/}
              {/*  <table style={{position: "absolute", top: "-50px", left: "120%"}}>*/}
              {/*    <tr>*/}
              {/*      <td style={{verticalAlign: "middle"}}>*/}
              {/*        <div style={{width: "0px"}}>*/}
              {/*          <div className="backgroundLine"></div>*/}
              {/*        </div>*/}
              {/*      </td>*/}
              {/*      <td>*/}
              {/*        <div className="borderLeft">*/}
              {/*          <div onClick={()=>"markerClick('Human','Brain','Neuron')"}>Neuron (224)</div>*/}
              {/*          <div onClick={()=>"markerClick('Human','Brain','Astrocyte')"}>Astrocyte (166)</div>*/}
              {/*          <div onClick={()=>"markerClick('Human','Brain','Oligodendrocyte')"}>Oligodendrocyte (152)</div>*/}
              {/*          <div onClick={()=>"tissueCellChange('Brain');"}>other 12 cells</div>*/}
              {/*        </div>*/}
              {/*      </td>*/}
              {/*    </tr>*/}
              {/*  </table>*/}
              {/*</div>*/}

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
                  src={heart}
                  style={{ width: '40%', height: '80%', display: 'block' }}
                />
              </div>
              <div className={styles.heart}>
                <img
                  src={heart}
                  style={{ width: '40%', height: '80%', display: 'block' }}
                />
              </div>
              <div className={styles.heart}>
                <img
                  src={heart}
                  style={{ width: '40%', height: '80%', display: 'block' }}
                />
              </div>
              <div className={styles.heart}>
                <img
                  src={heart}
                  style={{ width: '40%', height: '80%', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={4} sm={6} md={10} lg={10} xl={12} push={1}>
          {/*<Tsne />*/}
        </Col>
      </Row>
    </div>
  );
}
