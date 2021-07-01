import React from 'react';
import styles from './index.less';
import { Col, Row, Anchor, Typography, Image } from 'antd';
const { Link } = Anchor;
const { Title, Text, Paragraph } = Typography;
import d1 from '../../assets/d1.png';
import d2 from '../../assets/d2.png';
import d3 from '../../assets/d3.png';
import d4 from '../../assets/d4.png';
import d5 from '../../assets/d5.png';
import d6 from '../../assets/d6.png';

export default function Page() {
  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={4} lg={4} xl={4}>
          <Anchor>
            <Link href="#introduction" title="Introduction">
              <Link href="#background" title="Background" />
              <Link href="#mission" title="Mission" />
            </Link>

            <Link href="#dataprocess" title="Data Processing">
              <Link
                href="#analysis"
                title={
                  <div>
                    <p>Data collection</p>
                    <p>and analysis</p>
                  </div>
                }
              />
              <Link
                href="#processing"
                title={
                  <div>
                    <p>Quality control</p>
                    <p>and processing</p>
                  </div>
                }
              />
              <Link
                href="#expression"
                title={
                  <div>
                    <p>Drug induced</p>
                    <p>gene expression data</p>
                  </div>
                }
              />
            </Link>
            <Link
              href="#cedr"
              title={
                <div>
                  <p>Cell type-drug</p>
                  <p>enrichment analysis</p>
                  <p>(CeDR)</p>
                </div>
              }
            >
              <Link
                href="#home"
                title={
                  <div>
                    <p>Overview-Home</p>
                    <p>page</p>
                  </div>
                }
              />
              <Link
                href="#search"
                title={
                  <div>
                    <p>Browse and</p>
                    <p>search function</p>
                  </div>
                }
              />
              <Link
                href="#demonstration"
                title={
                  <div>
                    <p>Demonstration</p>
                    <p>of CeDR result</p>
                  </div>
                }
              />
            </Link>
          </Anchor>
        </Col>
        <Col xs={12} sm={14} md={20} lg={20} xl={20}>
          <div id={'introduction'}>
            <Title>Introduction</Title>
            <div id={'background'}>
              <Title level={2}>Background</Title>
              <Paragraph>
                Drug response to many diseases varies dramatically due to the
                complex genomics and functional features and contexts. Much of
                the diversity in individual drug response can be attributed to
                cellular heterogeneity including cell types, proportions,
                cell-cell communications, and temporal-spatial distributions of
                cells in tissues that are critical to diseases. The inability to
                efficiently measure transcriptional responses across diverse
                cell contexts has limited our understanding of how drug response
                differs across genomic and molecular cell states, which could be
                critical for predicting the therapeutic response of patient
                tumors. The recent advent in single-cell RNA sequencing
                (scRNA-seq) technologies has made it possible to measure the
                transcriptomes at the single cell resolution. Over the past few
                years, nearly a thousand studies have been conducted using
                scRNA-seq technologies to study the cell types and related
                features in bulk tissues. However, a gap has been existing to
                both experimentally and computationally infer cellular drug
                response, which would provide references for drug repurposing,
                drug combination design, and new therapeutic development.
              </Paragraph>
            </div>
            <div id={'mission'}>
              <Title level={2}>Mission</Title>
              <Paragraph>
                We present CeDR Atlas, a knowledgebase reporting computational
                inference of cellular drug response for hundreds of cell types
                from various tissues. We took advantage of the high-throughput
                profiling of drug-induced gene expression available through the
                Connectivity Map resource (CMAP) as well as hundreds of
                scRNA-seq data covering cells from a wide variety of
                organs/tissues, diseases, and conditions. CeDR provides direct
                references for cellular drug response profiles including not
                only disease cell types but also normal cell types. The
                comprehensive cell-type specific drug sets can be used for
                design of combinatory treatments, drug resistance and even drug
                side effects.
              </Paragraph>
            </div>
          </div>
          <div id={'dataprocess'}>
            <Title>Data Processing</Title>
            <div id={'analysis'}>
              <Title level={2}>Data collection and analysis</Title>
              <Paragraph>
                In CeDR, we collected and preprocessed scRNA-seq data from
                hundreds of individual studies, including those from large
                consortiums (such as Huma Cell Landscape), consisting of
                hundreds of cell types from human, mouse, and cell lines.
                Specifically, CeDR deposits the following data:
              </Paragraph>
              <Paragraph>
                • Human Cell Landscape dataset: 34 tissues with 1361 tissue cell
                types, resulting 599,926 cells.
              </Paragraph>
              <Paragraph>
                • Human scRNA-seq data: 51 projects with 2,421,320 cells, which
                resulting 55 tissues and 1313 tissue-cell types.
              </Paragraph>
              <Paragraph>
                • Mouse Cell Atlas dataset: 24 tissues with 729 tissue-cell
                types, resulting 333,778 cells.
              </Paragraph>
              <Paragraph>
                • Mouse scRNA-seq data: 16 projects with 655,950 cells. These
                projects finally result 25 tissues and 745 tissue-cell types.
              </Paragraph>
              <Paragraph>
                • Cancer cell line single-cell dataset: 21 cancer cell lines and
                197 cancer-cell types with 53,298 cells.
              </Paragraph>
            </div>
            <div id={'processing'}>
              <Title level={2}>Quality control and processing</Title>
              <Paragraph>
                The current version of our dataset, we mainly use labeled count
                and normalized expression data in public resources. For each
                project, we split it into sub objects based on the
                phenotypes/diseases. In summary, we totally obtain more than 270
                sub objects for human, mouse and cell lines.
              </Paragraph>
              <Paragraph>
                • For each single-cell expression tissue, we selected those cell
                types to have at least 20 cells.
              </Paragraph>
              <Paragraph>
                • Remove the cells that less than 500 genes expressed.
              </Paragraph>
            </div>
            <div id={'expression'}>
              <Title level={2}>Drug induced gene expression data</Title>
              <Paragraph>
                To systematically analyze the tissue-celltype drug responses
                across different perturbations. We assembled drug induced gene
                signatures from the CMAP database which contains 6,100
                expression profiles relating 1,309 compounds with different
                doses.
              </Paragraph>
            </div>
          </div>
          <div id={'cedr'}>
            <Title>Cell type-drug enrichment analysis (CeDR)</Title>
            <Paragraph>
              The underlying assumption of CeDR is that, for a query
              transcriptome, candidate drugs can be prioritized if such drugs
              have drug-induced perturbations (as measured by gene expression)
              in the opposite direction as the query transcriptome (As shown in
              below figure). The detailed procedures are described as follows:
            </Paragraph>
            <Image src={d1} preview={false}></Image>
            <Paragraph>
              • For each cell type in a given tissue, we calculated the average
              gene expression across all cells.
            </Paragraph>
            <Paragraph>
              • A signature gene set was created for each gene expression
              profile of the cell type which consists of the top k and bottom k
              ranked genes. We also created the signature gene set for each
              drug.
            </Paragraph>
            <Paragraph>
              • We are assuming that the effect of a drug to a cell type is to
              reverse the expression of a signature gene set (anti-correlation).
              To get the association score between drug and cell type: The down
              and up-regulated features of drugs should be significantly
              enriched in up and down features of cell type respectively. For
              each cell type-drug association, we used the Fisher’s exact test
              to perform the enrichment. Moreover, we required that the
              expression of drug and cell type should also be significantly
              anti-correlated which performed by Spearman correlation.
            </Paragraph>
            <div id={'home'}>
              <Title level={2}>Overview-Home page</Title>
              <Paragraph>
                The home page summarizes the main resources in the database,
                including the number of samples, projects, and cells that have
                been collected. The diagrammatic sketch shows the generalized
                tissues and phenotypes. By clicking the corresponding sources,
                you can jump to the different species page with corresponding
                tissues and phenotypes shown on the icons.
              </Paragraph>
              <Image src={d2} preview={false}></Image>
            </div>
            <div id={'search'}>
              <Title level={2}>Browse and search function</Title>
              <Paragraph>
                The browse page displays meta information of all subjects and
                provides data advanced search functions. The visible part of the
                table row contains the major meta information of the data,
                including Source, Project ID, Tissue, Phenotype, Celltype, Drug
                and other information specific to this subject. Clicking the
                **detail button** will enable the browse of detailed results for
                cell drug associations.
              </Paragraph>
              <Image src={d3} preview={false}></Image>
              <Paragraph>
                We provide multiple search functions for users to identify cell
                type, drug, disease or tissue of interest. For a user-input
                query string to search, we will search both the short names and
                the full names of interest.
              </Paragraph>
              <Image src={d4} preview={false}></Image>
            </div>
            <div id={'demonstration'}>
              <Title level={2}>Demonstration of CeDR result</Title>
              <Paragraph>In this page, we provide five sections:</Paragraph>
              <Paragraph>
                • Move the mouse to a point in the UMap diagram, and the
                coordinate of the cell-type information will be displayed.
              </Paragraph>
              <Paragraph>
                • Cell drug association: details of the gene signature
              </Paragraph>
              <Paragraph>
                • GSEA prerank result for genes in drug and single cell
                expression data.
              </Paragraph>
              <Image src={d5} preview={false}></Image>
              <Image src={d6} preview={false}></Image>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
