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
                    {/*<p>and analysis</p>*/}
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
                    <p>Download page</p>
                    {/*<p>of CeDR result</p>*/}
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
                Connectivity Map resource (CMap) as well as hundreds of
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
              <Title level={2}>Data collection</Title>
              <Paragraph>
                In CeDR, we collected and preprocessed scRNA-seq data from
                hundreds of individual studies, including those from large
                consortiums (such as Huma Cell Landscape), consisting of
                hundreds of cell types from human, mouse, and cell lines.
                Specifically, CeDR deposits the datasets as shown in following
                figures.
              </Paragraph>
              <Image
                src={d1}
                preview={false}
                style={{ width: '200%', display: 'inline' }}
              ></Image>
            </div>
            <div id={'processing'}>
              <Title level={2}>Quality control and processing</Title>
              <Paragraph>
                In the current version of our database, we mainly collected the
                expression data that have well-annotated cell types. Datasets
                with unavailable annotations were discarded from further
                analyses. All datasets were preprocessed using the Python
                package Scanpy and recorded as an AnnData object in Python.
                Genes detected in less than 5 cells were filtered out. Cells
                with a 5% threshold of mitochondrial gene proportion (mtDNA%,
                the fraction of mitochondrial transcript counts of the total
                transcript counts) were further filtered out due to the
                low-quality. Raw count expression matrices were subsequently
                normalized using the normalize_per_total function and log
                transformed. For each project, we split it into sub-objects
                based on the phenotype or disease status. For each single-cell
                expression sub-object, we kept only the cell types that
                contained at least 20 cells and further removed the cell types
                that had less than 500 expressed genes. In summary, we processed
                about 120 projects, resulting in 582 data objects, 140
                phenotypes and 1250 tissue specific cell types for human, mouse
                and cell lines.
              </Paragraph>
            </div>
            <div id={'expression'}>
              <Title level={2}>Drug induced gene expression data</Title>
              <Paragraph>
                To systematically analyze the tissue-celltype drug responses
                across different perturbations, we assembled drug induced gene
                signatures from the CMap database which contains 6,100
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
            <Image
              src={d2}
              preview={false}
              style={{ alignContent: 'center' }}
            ></Image>
            <Paragraph>
              • For each cell type, we first rank the expressed genes (defined
              as those with non-zero average expression values) according to
              their average expression across all cells for the same type. The k
              most highly expressed genes and the k most lowly expressed genes
              were then selected as the “within cell type” signature gene set
              for the cell type.
            </Paragraph>
            <Paragraph>
              • We conducted differentially expressed gene (DEG) analysis for
              each cell type as compared to other cell types, which is a
              standard procedure in scRNA-seq analysis. DEGs identified in this
              way are deemed as cell-type specific genes. We similarly selected
              the k most highly specifically expressed genes and the k most
              lowly specifically expressed genes as the signature gene set for
              the “across cell type” information. The “within cell type” gene
              set and the “across cell type” gene set were combined to define
              the cellular signature genes.
            </Paragraph>
            <Paragraph>
              • For each compound, we also defined a signature gene set based on
              their rank as provided by the CMap data, i.e., the top k and
              bottom k genes.
            </Paragraph>
            <Paragraph>
              • Following the concept of “anti-correlation”, we next constructed
              contingency tables using the down-regulated signature genes of
              each drug and the cellular signature genes that were highly (or
              highly specifically) expressed, followed by the chi-square test
              for drug and cell type association test (denoted as p-value 1).
              Similarly, we constructed contingency tables using the
              up-regulated signature genes of each drug and the cellular
              signature genes that were lowly expressed or lowly specifically
              expressed, followed by the chi-square test (denoted as p-value 2).
              The two contingency tables should be constructed separately to
              ensure that the chi-square test was conducted purposely to
              identify the anti-correlation relationship.
            </Paragraph>
            <Paragraph>
              • We further required that the expression of the overlapping genes
              from the two signature sets of the drug and the cell type should
              also be significantly anti-correlated, which is examined by
              Spearman correlation coefficient.
            </Paragraph>
            <div id={'home'}>
              <Title level={2}>Overview-Home page</Title>
              <Paragraph>
                The home page summarizes the main resources in the database,
                including the number of samples, projects, and cells that have
                been collected. The home page provides an overview of phenotypes
                across different tissues and a quick search function for users
                to query the database for species, tissues, cell types, or
                phenotypes conveniently. Datasets have been classified by
                tissues where users can select relevant dataset in a pop-up
                window to retrieve the corresponding phenotypes.
              </Paragraph>
              <Image src={d3} preview={false}></Image>
            </div>
            <div id={'search'}>
              <Title level={2}>Browse and search function</Title>
              <Paragraph>
                The “Browse” page displays a general table of all sub-objects
                and provides data advanced search functions. The visible part of
                the table row contains the major meta information of the data,
                including Source, Project ID, Tissue, Phenotype, Cell type, Drug
                and other information specific to this sub-object. Users can
                select a sub dataset of interest and clicking the corresponding
                “Dataset ID” button will enable the browse of detailed results
                for tissue specific cell type-drug associations. In particular,
                cell types-drug associations with significant p-values will be
                returned. The result page contains an intuitive table with more
                detailed information about the sub-object. Moreover, the
                visualization of cell types, fraction and predicted association
                network will be displayed. Moving the mouse to a point in the
                UMap diagram, and the coordinate of the cell-type information
                will be displayed. Clicking the “Detail” button for each
                association, the gene signature with GSEA prerank result in drug
                and single cell expression data will be further displayed.
              </Paragraph>
              <Image src={d4} preview={false}></Image>
              <Image src={d5} preview={false}></Image>
              <Image src={d6} preview={false}></Image>
            </div>
            <div id={'demonstration'}>
              <Title level={2}>Download page</Title>
              <Paragraph>
                We also provide multiple search function pages for users to
                identify cell type, drug, disease or tissue of interest. For a
                user-input query string, we will search both the short names and
                the full names of interest. In addition, users can download all
                data via the “Download” page.
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
