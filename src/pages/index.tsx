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
const { Text, Title, Link } = Typography;

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
        <a href={'/cedr/general'}>To be summarize</a>
      </p>
      <p>
        <a href={'/cedr/general'}>To be summarize</a>
      </p>
    </div>
  );

  const chArtery = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chBladder = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chBlood = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-ICU-SEP'}>
          BacterialSepsis ICU SEP
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-ICU-NoSEP'}>
          BacterialSepsis ICU NoSEP
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/MorphineTreated'}>Morphine Treated</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BM-Normal'}>BM Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/AML-malignant'}>AML Malignant</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/AML-Normal'}>AML Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/ImmuneCells-Normal'}>
          ImmuneCells Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-URO'}>
          BacterialSepsis URO
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/melanoma-TreatmentNaive'}>
          Melanoma TreatmentNaive
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/HyperAcuteHIV-1-Infection'}>
          HyperAcuteHIV 1 Infection
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Peripheral'}>Peripheral</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-Control'}>
          Bacterial Sepsis Control
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-Pam3CSK4'}>
          Bacterial Sepsis Pam3CSK4
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/MYE'}>MYE</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/IFNbTreated'}>IFNbTreated</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/MUT-Normal'}>MUT Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/OC-Normal'}>OC Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-LPS'}>
          Bacterial Sepsis LPS
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-Bac-SEP'}>
          Bacterial Sepsis Bac SEP
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/LPSTreated'}>LPS Treated</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/UlcerativeColitis'}>
          Ulcerative Colitis
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/melanoma-treatment'}>
          Melanoma Treatment
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/B-ALL'}>B-ALL</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-Leuk-UTI'}>
          Bacterial Sepsis-Leuk-UTI
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-NT'}>
          Bacterial Sepsis NT
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/BacterialSepsis-Int-URO'}>
          Bacterial Sepsis Int URO
        </a>
      </p>
    </div>
  );
  const chBone = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Osteoarthritis'}>Osteoarthritis</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/RheumatoidArthritis'}>
          Rheumatoid Arthritis
        </a>
      </p>
    </div>
  );
  const chBoneMarrow = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chBrain = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/CB-Normal'}>CB Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/FC-Normal'}>FC Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/DevelopingPFC-Normal'}>
          DevelopingPFC Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/NeurologicalDisorders'}>
          Neurological Disorders
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/VC-Normal'}>VC Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/AdultGBM'}>Adult GBM</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/ALZ'}>ALZ</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/PediatricGBM'}>Pediatric GBM</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/GBM'}>GBM</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/MultipleSclerosisAndControl'}>
          Multiple Sclerosis
        </a>
      </p>
    </div>
  );
  const chBreast = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/TNBC'}>TNBC</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chColon = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/ColorectalcancerTcells'}>
          Colorectal Cancer Tcells
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chEmbryo = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/differentiation'}>Differentiation</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chEsophagus = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chEye = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chFat = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chGallbladder = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chHESC = (
    <div>
      <p>
        <a href={' /cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chHeadNeck = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/HNSCC-Nonmalignant'}>
          HNSCC Nonmalignant
        </a>
      </p>
    </div>
  );
  const chHeart = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chIntestinal = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/UlcerativeColitis'}>
          Ulcerative Colitis
        </a>
      </p>
    </div>
  );
  const chKidney = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/LupusNephritis'}>Lupus Nephritis</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Kidneycancer'}>Kidney Cancer</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/tumor'}>Tumor</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );

  const chLiver = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/ImmuneCells-Normal'}>
          ImmuneCells Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chLung = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/asthma'}>Asthma</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/COVID'}>COVID</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chLymph = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Lymphoma'}>Lymphoma</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/peripheral'}>Peripheral</a>
      </p>
    </div>
  );
  const chMuscle = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chOesophagus = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/ESCA'}>ESCA</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const chPancreas = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/pancreascancer'}>Pancreas Cancer</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmAorta = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmBladder = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmBlood = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmBrain = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/astrocyte-Normal'}>
          Astrocyte Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Hypothalamus-Hungry'}>
          Hypothalamus Hungry
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Hypothalamus-Normal'}>
          Hypothalamus Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/PrimaryVisualCortex-Normal'}>
          PrimaryVisualCortex Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Hypothalamic-Normal'}>
          Hypothalamic Normal
        </a>
      </p>
    </div>
  );
  const cmBreast = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/EpithelialStages'}>
          Epithelial Stages
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmColon = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmDiaphragm = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmEmbryo = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmEye = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/ONC-ResilienceInjury'}>
          ONC Resilience Injury
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmFat = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmHeart = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/TIP-MIDay3'}>TIP MIDay3</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/TIP-MIDay7'}>TIP MIDay7</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/GFP-ShamDay7'}>GFP ShamDay7</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/GFP-MIDay3'}>GFP MIDay3</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/AutoimmuneMyocarditis'}>
          Autoimmune Myocarditis
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/GFP-MIDay7'}>GFP MIDay7</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/TIP-Sham'}>TIP Sham</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/GFP-ShamDay3'}>GFP ShamDay3</a>
      </p>
    </div>
  );
  const cmIntestinal = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmKidney = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmLiver = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmLung = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/ILCs-AllergicLungInflammation'}>
          ILCs AllergicLung Inflammation
        </a>
      </p>
    </div>
  );
  const cmMarrow = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmMesenchymalStemCells = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmMuscle = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmOvary = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmPancreas = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/PancreasEndocrinogenesis'}>
          Pancreas Endocrinogenesis
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/atlas-Normal'}>Atlas Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmProstate = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/RegenerativeTimecourse'}>
          Regenerative Timecourse
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmReproductive = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Development-Normal'}>
          Development Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmRespiratory = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmRib = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmSkin = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmSmallIntestine = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Salmonella'}>Salmonella</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
      <p>
        <a href={'/cedr/general/phenotype/Hpoly'}>Hpoly</a>
      </p>
    </div>
  );
  const cmSpine = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmSpleen = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmStomach = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmThymus = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );
  const cmTongue = (
    <div>
      <p>
        <a href={'/cedr/general/phenotype/Normal'}>Normal</a>
      </p>
    </div>
  );

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
                <Popover content={chBrain} title={'Brain'} placement="right">
                  <img
                    src={brain}
                    style={{ width: '35%', height: '70%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.lung}>
                <Popover content={chLung} title={'Lung'} placement="right">
                  <img
                    src={lung}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.heart}>
                <Popover content={chHeart} title={'Heart'} placement="right">
                  <img
                    src={heart}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.liver}>
                <Popover content={chLiver} title={'Liver'} placement="right">
                  <img
                    src={liver}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.blood}>
                <Popover content={chBladder} title={'Bladder'} placement="left">
                  <img
                    src={bladder}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.largeintestine}>
                <Popover
                  content={chIntestinal}
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
                  content={chIntestinal}
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
                <Popover content={chBone} title={'Bone'} placement="right">
                  <img
                    src={bone}
                    style={{ width: '30%', height: '60%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.eye}>
                <Popover content={chBlood} title={'Blood'} placement="right">
                  <img
                    src={blood}
                    style={{ width: '35%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.bladder}>
                <Popover content={chEye} title={'Eye'} placement="left">
                  <img
                    src={eye}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.pancreas}>
                <Popover
                  content={chPancreas}
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
                <Popover content={chFat} title={'Fat'} placement="left">
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
                <Popover content={chKidney} title={'Kidney'} placement="left">
                  <img
                    src={kidney}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.gallbladder}>
                <Popover
                  content={chGallbladder}
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
                <Popover content={cmBrain} title={'Brain'} placement="right">
                  <img
                    src={mbrain}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mlung}>
                <Popover content={cmLung} title={'Lung'} placement="right">
                  <img
                    src={mlung}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mheart}>
                <Popover content={cmHeart} title={'Heart'} placement="right">
                  <img
                    src={mheart}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mliver}>
                <Popover content={cmLiver} title={'Liver'} placement="right">
                  <img
                    src={mliver}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mblood}>
                <Popover content={cmBlood} title={'Blood'} placement="right">
                  <img
                    src={mblood}
                    style={{ width: '30%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mlargeintestine}>
                <Popover
                  content={cmIntestinal}
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
                  content={cmSmallIntestine}
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
                <Popover content={cmEye} title={'Eye'} placement="left">
                  <img
                    src={meye}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mbladder}>
                <Popover content={cmBladder} title={'Bladder'} placement="left">
                  <img
                    src={mbladder}
                    style={{ width: '30%', height: '70%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mpancreas}>
                <Popover
                  content={cmPancreas}
                  title={'Pancreas'}
                  placement="left"
                >
                  <img
                    src={mpancreas}
                    style={{ width: '30%', height: '70%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mspleen}>
                <Popover content={cmSpleen} title={'Spleen'} placement="left">
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
                <Popover content={cmSkin} title={'Skin'} placement="left">
                  <img
                    src={mskin}
                    style={{ width: '30%', height: '70%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mkidney}>
                <Popover content={cmKidney} title={'Kidney'} placement="left">
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
                Introduction of CeDR Atlas:
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
                  'CeDR represents an omnibus systematic exploration of tissue-cell type specific drug response for human, mouse and cell lines. We collected the fast-growing single-cell transcriptome profiling generated by multiple international consortiums (e.g '
                }
                <Link href={'https://db.cngb.org/HCL/'}>
                  Human Cell Landscape,
                </Link>
                <Link href={'http://bis.zju.edu.cn/MCA/atlas.html'}>
                  Mouse Cell Atlas
                </Link>
                {' and '}
                <Link href={'https://sites.broadinstitute.org/ccle/'}>
                  CCLE
                </Link>
                {
                  ' and other available labeled datasets to conduct the tissue-cell type based drug perturbation analysis. These will help to reveal tissue-cell type specific drug response and further provide insight into identifying potential side effects, drug repurposing and even combination therapies. Currently, CeDR maintainsed the results for more than 270 single cell data objects for human, mouse and cell lines, including more than 34 tissues and 700 tissue-cell combination types. In summary, we identified a total of '
                }
                <strong style={{ color: 'red' }}>1368906</strong>
                {' significant drug-cell type associations'}
                <strong style={{ color: 'red' }}>
                  {'(enriched p-value<0.05, correlation p-value<0.01)'}
                </strong>
                {
                  '. Users can browse and search the drugs, cell types, tissues, and diseases and could also filter and prioritize the associations with exact gene signatures. Overall, CeDR infers drug response at cellular resolution and sheds light on the potential of drug combinations. For details of usage of this database please see the '
                }
                <Link href={'/documentation'}>documentation</Link>
                {' page.'}
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
                value={67}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Datasets</strong>}
                value={283}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Tissues</strong>}
                value={47}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Phenotype</strong>}
                value={59}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Cells</strong>}
                value={4064272}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Drugs</strong>}
                value={6100}
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
              <Timeline.Item>Create the services site 2021-06-01</Timeline.Item>
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
                &nbsp;Single Cell Portal{' '}
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
