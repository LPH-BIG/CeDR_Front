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
import {
  HumanIcon,
  MouseIcon,
  CelllineIcon,
  StudyIcon,
  DatasetIcon,
  TissueIcon,
  CellIcon,
  DrugIcon,
  PhenotypeIcon,
} from '../components/Icons';
import Wordcloud from '../components/wordcloud';
import human from '../assets/human1.jpg';
import heart from '../assets/heart.png';
import bladder from '../assets/bladder.png';
import Artery from '../assets/Artery.png';
import Esophagus from '../assets/Esophagus.jpg';
import muscle from '../assets/muscle.png';
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
        <a href={'/cedr/general/source/Human/tissue/Artery/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const chBladder = (
    <div>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Uterine/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Uterine/phenotype/UCEC'}>
          UCEC
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Ovarian/phenotype/OV-FTC'}>
          OV-FTC
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Ovarian/phenotype/Normal'}>
          Normal Ovarian
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Testis/phenotype/Normal'}>
          Normal Testis
        </a>
      </p>
    </div>
  );
  const chBlood = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Blood/phenotype/Healthy Control'
          }
        >
          Healthy Control
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Blood/phenotype/Cytomegalovirus-Positive'
          }
        >
          Cytomegalovirus Positive
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Blood/phenotype/Cytomegalovirus-Negative'
          }
        >
          Cytomegalovirus Negative
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Blood/phenotype/Salmonella Enterica Serovar Typhimurium'
          }
        >
          Salmonella Enterica Serovar Typhimurium
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Melanoma-Treatmentnaive'
          }
        >
          Melanoma-Treatmentnaive
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Bacterial Sepsis-ICU-NOSEP'
          }
        >
          Bacterial Sepsis-ICU-NOSEP
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Bacterial Sepsis-URO'
          }
        >
          Bacterial Sepsis-URO
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Bacterial Sepsis-ICU-SEP'
          }
        >
          Bacterial Sepsis-ICU-SEP
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Bacterial Sepsis-INT-URO'
          }
        >
          Bacterial Sepsis-INT-URO
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Hyperacute HIV-1-Infection'
          }
        >
          Hyperacute HIV-1-Infection
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Blood/phenotype/Healthy'}>
          Healthy
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Ulcerative Colitis'
          }
        >
          Ulcerative Colitis
        </a>
      </p>
      <p>
        <a
          href={'/cedr/general/source/Human/tissue/Blood/phenotype/Lps Treated'}
        >
          Lps Treated
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Morphine-Treated'
          }
        >
          Morphine-Treated
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Ifnb-Treated'
          }
        >
          Ifnb-Treated
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Bacterial Sepsis-BAC-SEP'
          }
        >
          Bacterial Sepsis-BAC-SEP
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Melanoma-Treatment'
          }
        >
          Melanoma-Treatment
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Immune Cells-Normal'
          }
        >
          Immune Cells-Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Bacterial Sepsis-Control'
          }
        >
          Bacterial Sepsis-Control
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Blood/phenotype/Bacterial Sepsis-LEUK-UTI'
          }
        >
          Bacterial Sepsis-LEUK-UTI
        </a>
      </p>
    </div>
  );
  const chBone = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Bone/phenotype/Healthy Control'
          }
        >
          Healthy Control
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Bone/phenotype/Osteoarthritis'
          }
        >
          Bone Osteoarthritis
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Bone/phenotype/Rheumatoid Arthritis'
          }
        >
          Bone Rheumatoid Arthritis
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/BoneMarrow/phenotype/AML-Normal'
          }
        >
          Bone Marrow AML-Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/BoneMarrow/phenotype/BALL'}>
          Bone Marrow BALL
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/BoneMarrow/phenotype/Bacterial Sepsis-LPS'
          }
        >
          Bone Marrow Bacterial Sepsis-LPS
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/BoneMarrow/phenotype/Bacterial Sepsis-NT'
          }
        >
          Bone Marrow Bacterial Sepsis-NT
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/BoneMarrow/phenotype/Bacterial Sepsis-PAM3CSK4'
          }
        >
          Bone Marrow Bacterial Sepsis-PAM3CSK4
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/BoneMarrow/phenotype/OC-Normal'
          }
        >
          Bone Marrow OC-Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/BoneMarrow/phenotype/AML-Malignant'
          }
        >
          Bone Marrow AML-Malignant
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/BoneMarrow/phenotype/BM-Normal'
          }
        >
          Bone Marrow Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/BoneMarrow/phenotype/MYE'}>
          Bone Marrow MYE
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/BoneMarrow/phenotype/Peripheral'
          }
        >
          Bone Marrow Peripheral
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/BoneMarrow/phenotype/MUT-Normal'
          }
        >
          Bone Marrow MUT-Normal
        </a>
      </p>
    </div>
  );
  const chBrain = (
    <div>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Brain/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a
          href={
            "/cedr/general/source/GEN/tissue/Brain/phenotype/Alzheimer's Disease"
          }
        >
          Alzheimer's Disease
        </a>
      </p>
      <p>
        <a
          href={
            "/cedr/general/source/GEN/tissue/Brain/phenotype/Huntington's Disease"
          }
        >
          Huntington's Disease
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Brain/phenotype/VC-Normal'}>
          VC Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Brain/phenotype/FC-Normal'}>
          FC-Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Brain/phenotype/Developing Pfc-Normal'
          }
        >
          Developing Pfc-Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Brain/phenotype/Glioblastoma'
          }
        >
          Glioblastoma
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Brain/phenotype/Multiple Sclerosis and Control'
          }
        >
          Multiple Sclerosis and Control
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Brain/phenotype/Pediatric GBM'
          }
        >
          Pediatric GBM
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Brain/phenotype/Neurological Disorders'
          }
        >
          Neurological Disorders
        </a>
      </p>
    </div>
  );
  const chThyroid = (
    <div>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Thyroid/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Thyroid/phenotype/THCA'}>
          THCA
        </a>
      </p>
    </div>
  );
  const chColon = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Colon/phenotype/ColorectalCancer'
          }
        >
          Colorectal Cancer Tcells
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Colon/phenotype/Normal'}>
          Normal
        </a>
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
        <a
          href={'/cedr/general/source/Human/tissue/Oesophagus/phenotype/Normal'}
        >
          Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Oesophagus/phenotype/Esca'}>
          Esophagus
        </a>
      </p>
    </div>
  );
  const chEye = (
    <div>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Retina/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/GEN/tissue/Retina/phenotype/Normal'}>
          Macular Degeneration
        </a>
      </p>
    </div>
  );
  const chSkin = (
    <div>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Skin/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Skin/phenotype/Atopic Dermatitis'
          }
        >
          Atopic Dermatitis
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Skin/phenotype/GA'}>GA</a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Skin/phenotype/Leprosy'}>
          Leprosy
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Skin/phenotype/Psoriasis'}>
          Psoriasis
        </a>
      </p>

      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Skin/phenotype/BCC-Post Treatment'
          }
        >
          BCC-Post Treatment
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Skin/phenotype/BCC-Pre Treatment'
          }
        >
          BCC-Pre Treatment
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Skin/phenotype/Lupus Nephritis'
          }
        >
          Lupus Nephritis
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Skin/phenotype/Acne'}>
          Acne
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Skin/phenotype/Alopecia'}>
          Alopecia
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Skin/phenotype/Fibroblasts Priming'
          }
        >
          Fibroblasts Priming
        </a>
      </p>
    </div>
  );
  const chSpleen = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Spleen/phenotype/Immune Cells-Normal'
          }
        >
          Normal Immune Cells
        </a>
      </p>
    </div>
  );
  const chGallbladder = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Gallbladder/phenotype/Normal'
          }
        >
          Normal
        </a>
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
        <a
          href={
            '/cedr/general/source/Human/tissue/HeadNeck/phenotype/Hnscc-NonMalignant'
          }
        >
          HNSCC Nonmalignant
        </a>
      </p>
    </div>
  );
  const chHeart = (
    <div>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Heart/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const chIntestinal = (
    <div>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Ileum/phenotype/Normal'}>
          Ileum Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Intestine/phenotype/Primary Neuroendocrine Tumor'
          }
        >
          Primary Neuroendocrine Tumor
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Rectum/phenotype/Normal'}>
          Rectum Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Rectum/phenotype/Ulcerative Colitis'
          }
        >
          Rectum Ulcerative Colitis
        </a>
      </p>
    </div>
  );
  const chKidney = (
    <div>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Kidney/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Kidney/phenotype/Lupus Nephritis'
          }
        >
          Lupus Nephritis
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Kidney/phenotype/Kidney Cancer'
          }
        >
          Kidney Cancer
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Kidney/phenotype/Tumor'}>
          Tumor
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/GEN/tissue/Kidney/phenotype/Diabetic'}>
          Diabetic
        </a>
      </p>
    </div>
  );

  const chLiver = (
    <div>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Liver/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Liver/phenotype/Immune Cells-Normal'
          }
        >
          Immune Cells Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Liver/phenotype/Metastatic Neuroendocrine Tumor'
          }
        >
          Metastatic Neuroendocrine Tumor
        </a>
      </p>
    </div>
  );
  const chLung = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Lung/phenotype/Sars-Cov-2 Infection'
          }
        >
          SARS-Cov-2 Infection
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Lung/phenotype/Lung Adenocarcinoma'
          }
        >
          Lung Adenocarcinoma
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/GEN/tissue/Lung/phenotype/Lung Adenocarcinom + Large Cell Neuroendocrine Carcinoma'
          }
        >
          Lung Adenocarcinom & Large Cell Neuroendocrine Carcinoma
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Respiratory/phenotype/Allergicinflammatory'
          }
        >
          Allergic Inflammatory
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Lung/phenotype/asthma'}>
          Asthma
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Human/tissue/Lung/phenotype/COVID19'}>
          Lung COVID19
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Respiratory/phenotype/COVID19'
          }
        >
          Respiratory COVID19
        </a>
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
        <a href={'/cedr/general/source/Human/tissue/Muscle/phenotype/Normal'}>
          Normal
        </a>
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
        <a href={'/cedr/general/source/Human/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Pancreas/phenotype/Pancreas Cancer'
          }
        >
          Pancreas Cancer
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Pancreas/phenotype/Type 1 Diabetes'
          }
        >
          Type1 Diabetes
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Human/tissue/Pancreas/phenotype/Type 2 Diabetes'
          }
        >
          Type2 Diabetes
        </a>
      </p>
      {/*<p>*/}
      {/*  <a href={'/cedr/general/source/Human/tissue/Pancreas/phenotype/PAAD'}>*/}
      {/*    PAAD*/}
      {/*  </a>*/}
      {/*</p>*/}
    </div>
  );
  const cmAorta = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmBladder = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Bladder/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmBlood = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Blood/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmBrain = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Brain/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Brain/phenotype/Astrocyte-Normal'
          }
        >
          Astrocyte Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Brain/phenotype/Hypothalamus-Hungry'
          }
        >
          Hypothalamus Hungry
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Brain/phenotype/Hypothalamus-Normal'
          }
        >
          Hypothalamus Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Brain/phenotype/Primaryvisualcortex-Normal'
          }
        >
          PrimaryVisualCortex Normal
        </a>
      </p>
    </div>
  );
  const cmBreast = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Breast/phenotype/Epithelialstages'
          }
        >
          Breast Epithelial Stages
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Thymus/phenotype/Normal'}>
          Normal Thymus
        </a>
      </p>
    </div>
  );
  const cmColon = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Colon/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmDiaphragm = (
    <div>
      <p>
        <a
          href={'/cedr/general/source/Mouse/tissue/Diaphragm/phenotype/Normal'}
        >
          Normal
        </a>
      </p>
    </div>
  );
  const cmEmbryo = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmEye = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Retina/phenotype/Onc-Resilienceinjury'
          }
        >
          ONC Resilience Injury
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Retina/phenotype/Atlas-Normal'
          }
        >
          Normal
        </a>
      </p>
    </div>
  );
  const cmFat = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmHeart = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Heart/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Heart/phenotype/Tip-Sham'}>
          TIP Sham
        </a>
      </p>
      <p>
        <a
          href={'/cedr/general/source/Mouse/tissue/Heart/phenotype/Tip-Miday3'}
        >
          TIP MIDay3
        </a>
      </p>
      <p>
        <a
          href={'/cedr/general/source/Mouse/tissue/Heart/phenotype/Tip-Miday7'}
        >
          TIP MIDay7
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Heart/phenotype/Gfp-Shamday3'
          }
        >
          GFP ShamDay3
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Heart/phenotype/Gfp-Shamday7'
          }
        >
          GFP ShamDay7
        </a>
      </p>
      <p>
        <a
          href={'/cedr/general/source/Mouse/tissue/Heart/phenotype/Gfp-Miday3'}
        >
          GFP MIDay3
        </a>
      </p>
      <p>
        <a
          href={'/cedr/general/source/Mouse/tissue/Heart/phenotype/Gfp-Miday7'}
        >
          GFP MIDay7
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Heart/phenotype/Autoimmunemyocarditis'
          }
        >
          Autoimmune Myocarditis
        </a>
      </p>
    </div>
  );
  const cmIntestinal = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Smallintestine/phenotype/Control'
          }
        >
          Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Smallintestine/phenotype/Epithelialcellsatlas-Normal'
          }
        >
          Normal Epithelialcellsatlas
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Smallintestine/phenotype/Hpoly'
          }
        >
          Hpoly
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Smallintestine/phenotype/Hpoly-Day3-Treatment'
          }
        >
          Hpoly-Day3-Treatment
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Smallintestine/phenotype/Hpoly-Day10-Treatment'
          }
        >
          Hpoly-Day10-Treatment
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Smallintestine/phenotype/Salmonella'
          }
        >
          Salmonella
        </a>
      </p>
    </div>
  );
  const cmKidney = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Kidney/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmLiver = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Liver/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmLung = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Lung/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Lung/phenotype/Ilcs-Allergiclunginflammation'
          }
        >
          ILCs AllergicLung Inflammation
        </a>
      </p>
    </div>
  );
  const cmMarrow = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Lumbarspinalcord/phenotype/Normal'
          }
        >
          Normal Lumbarspinalcord
        </a>
      </p>
    </div>
  );
  const cmMesenchymalStemCells = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmBone = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Muscle/phenotype/Normal'}>
          Normal Muscle
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Lumbarspinalcord/phenotype/Normal'
          }
        >
          Normal Lumbarspinalcord
        </a>
      </p>
    </div>
  );
  const cmOvary = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Testis/phenotype/Develop-Normal'
          }
        >
          Testis Development
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Testis Emptydrops/phenotype/Develop-Normal'
          }
        >
          Emptydrops Testis Development
        </a>
      </p>
    </div>
  );
  const cmPancreas = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Pancreas/phenotype/PancreasEndocrinogenesis'
          }
        >
          Pancreas Endocrinogenesis
        </a>
      </p>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Pancreas/phenotype/atlas-Normal'
          }
        >
          Atlas Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmProstate = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Prostate/phenotype/RegenerativeTimecourse'
          }
        >
          Regenerative Timecourse
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Prostate/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmRespiratory = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmRib = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmSkin = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmSmallIntestine = (
    <div>
      <p>
        <a
          href={
            '/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Salmonella'
          }
        >
          Salmonella
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Hpoly'}>
          Hpoly
        </a>
      </p>
    </div>
  );
  const cmSpine = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Pancreas/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmSpleen = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Spleen/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmStomach = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Stomach/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmThymus = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Breast/phenotype/Normal'}>
          Normal
        </a>
      </p>
    </div>
  );
  const cmTongue = (
    <div>
      <p>
        <a href={'/cedr/general/source/Mouse/tissue/Tongue/phenotype/Normal'}>
          Normal
        </a>
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
            // loading={true}
            onFocus={() => {
              getRemoteTypeKeywords('').then((res) => {
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
            <Col push={1}>
              <Text
                type={'danger'}
                strong={true}
                style={{ fontSize: '20px', marginLeft: '1px' }}
              >
                Click the buttons to switch source and the organs to quick
                search
              </Text>
            </Col>
          </Row>
          <Row justify={'center'} style={{ marginTop: '10px' }}>
            <Col md={10} pull={2}>
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
                  marginLeft: '20%',
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
                <Popover
                  content={chBladder}
                  title={'Reproductive organs'}
                  placement="right"
                >
                  <img
                    src={bladder}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.largeintestine}>
                <Popover
                  content={chIntestinal}
                  title={'Intestine'}
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
                  content={chThyroid}
                  title={'Thyroid'}
                  placement="right"
                >
                  <img
                    src={mthyroid}
                    style={{ width: '50%', height: '70%', display: 'block' }}
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
                <Popover content={chSpleen} title={'Spleen'} placement="left">
                  <img
                    src={spleen}
                    style={{ width: '40%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.uterus}>
                <Popover
                  content={chEsophagus}
                  title={'Esophagus'}
                  placement="left"
                >
                  <img
                    src={Esophagus}
                    style={{ width: '50%', height: '50%' }}
                  />
                </Popover>
              </div>
              <div className={styles.skin}>
                <Popover content={chSkin} title={'Skin'} placement="left">
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
            <Col pull={2}>
              <Wordcloud />
            </Col>
          </Row>
          <Row className={styles.mouse} style={{ display: dmouse }}>
            <div>
              <img
                src={mouse}
                style={{
                  width: '350px',
                  height: '550px',
                  display: 'block',
                  marginLeft: '20%',
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
                  title={'Intestine'}
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
                  content={cmStomach}
                  title={'Stomach'}
                  placement="right"
                >
                  <img
                    src={stomach}
                    style={{ width: '35%', height: '80%', display: 'block' }}
                  />
                </Popover>
              </div>
              <div className={styles.mbone}>
                <Popover content={cmBone} title={'Bone'} placement="right">
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
                <Popover
                  content={cmOvary}
                  title={'Reproductive organs'}
                  placement="left"
                >
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
                <Popover content={cmBreast} title={'Breast'} placement="left">
                  <img
                    src={mthyroid}
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
                  fontSize: '16px',
                  textAlign: 'auto',
                  textJustify: 'newspaper',
                  // textAlign: 'auto',
                }}
                // strong={true}
              >
                {
                  'CeDR represents an omnibus systematic exploration of tissue cell type specific drug response for human, mouse and cell lines. We collected the fast-growing single-cell transcriptome profiling generated by multiple international consortiums (e.g '
                }
                <Link
                  href={'https://singlecell.broadinstitute.org/single_cell'}
                >
                  Single Cell portal, &nbsp;
                </Link>
                <Link href={'https://db.cngb.org/HCL/'}>
                  Human Cell Landscape,
                </Link>
                {' and '}
                <Link href={'http://bis.zju.edu.cn/MCA/atlas.html'}>
                  Mouse Cell Atlas
                </Link>
                {/*{' and '}*/}
                {/*<Link href={'https://sites.broadinstitute.org/ccle/'}>*/}
                {/*  CCLE*/}
                {/*</Link>*/}
                {
                  ' and other available labeled da-tasets to conduct the tissue cell type specific drug response analysis. CeDR provides direct references for cellular drug response profiles including not only disease cell types but also normal cell types. Currently, CeDR maintains the results for more than 582 single cell data objects for human, mouse and cell lines, including about 140 pheno-types and 1250 tissue-cell combination types, which result about '
                }
                <strong style={{ color: 'red' }}>188,157</strong>
                {'  for human,'}
                <strong style={{ color: 'red' }}>42,660 </strong>
                {'  for mouse and '}
                <strong style={{ color: 'red' }}>10,299</strong>
                {'  for cell line significant cell type-drug associations '}
                <strong style={{ color: 'red' }}>
                  {'(enriched p-values<0.05, correlation p-value<0.01)'}
                </strong>
                {
                  '. Users can brow-se and search the drugs, cell types, tissues, and diseases and could also filter and prioritize the associations with exact gene signatures. Overall, CeDR infers drug response at cellular resolution and sheds light on the design of combinatory treatments and identification of drug resistance and even drug side effects. For details of usage of this database please see the '
                }
                <Link href={'https://ngdc.cncb.ac.cn/cedr/documentation'}>
                  documentation
                </Link>
                {' page.'}
              </Text>
            </div>
          </Row>
        </Col>
        <Col xs={5} sm={5} md={5} lg={7} xl={7} push={4}>
          <Card
            title={<strong>Human Resource Overview</strong>}
            // extra={<a href="/cedr/general">More</a>}
            style={{ width: 400, display: dhuman }}
            bordered={true}
            hoverable={true}
          >
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Studies</strong>}
                value={94}
                valueStyle={{ color: '#3f8600' }}
                prefix={<StudyIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Datasets</strong>}
                value={460}
                valueStyle={{ color: '#3f8600' }}
                prefix={<DatasetIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Tissues</strong>}
                value={26}
                valueStyle={{ color: '#3f8600' }}
                prefix={<TissueIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Phenotypes</strong>}
                value={93}
                valueStyle={{ color: '#3f8600' }}
                prefix={<PhenotypeIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={
                  <strong style={{ color: '#363636' }}>Cells Types</strong>
                }
                value={684}
                valueStyle={{ color: '#3f8600' }}
                prefix={<CellIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Drugs</strong>}
                value={1309}
                valueStyle={{ color: '#3f8600' }}
                prefix={<DrugIcon />}
              />
            </Card.Grid>
          </Card>
          <Card
            title={<strong>Mouse Resource Overview</strong>}
            // extra={<a href="/cedr/general">More</a>}
            style={{ width: 400, display: dmouse }}
            bordered={true}
            hoverable={true}
          >
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Studies</strong>}
                value={15}
                valueStyle={{ color: '#3f8600' }}
                prefix={<StudyIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Datasets</strong>}
                value={102}
                valueStyle={{ color: '#3f8600' }}
                prefix={<DatasetIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Tissues</strong>}
                value={25}
                valueStyle={{ color: '#3f8600' }}
                prefix={<TissueIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Phenotypes</strong>}
                value={27}
                valueStyle={{ color: '#3f8600' }}
                prefix={<PhenotypeIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={
                  <strong style={{ color: '#363636' }}>Cells Types</strong>
                }
                value={370}
                valueStyle={{ color: '#3f8600' }}
                prefix={<CellIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Drugs</strong>}
                value={1309}
                valueStyle={{ color: '#3f8600' }}
                prefix={<DrugIcon />}
              />
            </Card.Grid>
          </Card>
          <Card
            title={<strong>Cell Line Resource Overview</strong>}
            // extra={<a href="/cedr/general">More</a>}
            style={{ width: 400, display: dcellline }}
            bordered={true}
            hoverable={true}
          >
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Studies</strong>}
                value={1}
                valueStyle={{ color: '#3f8600' }}
                prefix={<StudyIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Datasets</strong>}
                value={20}
                valueStyle={{ color: '#3f8600' }}
                prefix={<DatasetIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Tissues</strong>}
                value={20}
                valueStyle={{ color: '#3f8600' }}
                prefix={<TissueIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Phenotype</strong>}
                value={4}
                valueStyle={{ color: '#3f8600' }}
                prefix={<PhenotypeIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={
                  <strong style={{ color: '#363636' }}>Cells Types</strong>
                }
                value={196}
                valueStyle={{ color: '#3f8600' }}
                prefix={<CellIcon />}
              />
            </Card.Grid>
            <Card.Grid style={{ width: '50%', textAlign: 'center' }}>
              <Statistic
                title={<strong style={{ color: '#363636' }}>Drugs</strong>}
                value={1309}
                valueStyle={{ color: '#3f8600' }}
                prefix={<DrugIcon />}
              />
            </Card.Grid>
          </Card>
          <Divider />
          <Card
            title={<strong>Recent Events</strong>}
            style={{ width: 400 }}
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
            style={{ width: 400 }}
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
