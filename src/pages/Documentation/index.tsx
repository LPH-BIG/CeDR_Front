import React from 'react';
import styles from './index.less';
import { Col, Row, Anchor, Typography } from 'antd';
const { Link } = Anchor;
const { Title, Text, Paragraph } = Typography;
export default function Page() {
  return (
    <div>
      <Row>
        <Col xs={2} sm={4} md={4} lg={4} xl={4}>
          <Anchor>
            <Link href="#introduction" title="Introduction" />
            <Link href="#datasource" title="Dats Source">
              <Link href="#human" title="Human" />
              <Link href="#cellline" title="Cancer Cell Line" />
              <Link href="#mouse" title="Mouse" />
            </Link>
            <Link href="#dataprocess" title="Data Process">
              <Link href="#analysis" title="Analysis" />
              <Link href="#example" title="Example" />
              <Link href="#columndescription" title="Column Description" />
              <Link href="#metadaata" title="Metadaata" />
              <Link href="#curation" title="Curation" />
            </Link>
          </Anchor>
        </Col>
        <Col xs={12} sm={14} md={20} lg={20} xl={20}>
          <div id={'introduction'}>
            <Title>Introduction</Title>
            <Paragraph>
              Recently, Single-cell bisulfite sequencing methods have been
              widely used in DNA methylation analysis because of their ability
              to clarify epigenomic heterogeneity among cells in various cell
              states. Over the past years, the field of single-cell DNA
              methylation is on the rise with the continuously produced great
              amounts of data, which enhance our understanding of epigenetic
              research of rare cell types, including in the early embryonic
              development, biogenesis of diseases, tumor progression and so on.
            </Paragraph>
            <Paragraph>
              Recently, Single-cell bisulfite sequencing methods have been
              widely used in DNA methylation analysis because of their ability
              to clarify epigenomic heterogeneity among cells in various cell
              states. Over the past years, the field of single-cell DNA
              methylation is on the rise with the continuously produced great
              amounts of data, which enhance our understanding of epigenetic
              research of rare cell types, including in the early embryonic
              development, biogenesis of diseases, tumor progression and so on.
            </Paragraph>
            <Paragraph>
              Recently, Single-cell bisulfite sequencing methods have been
              widely used in DNA methylation analysis because of their ability
              to clarify epigenomic heterogeneity among cells in various cell
              states. Over the past years, the field of single-cell DNA
              methylation is on the rise with the continuously produced great
              amounts of data, which enhance our understanding of epigenetic
              research of rare cell types, including in the early embryonic
              development, biogenesis of diseases, tumor progression and so on.
            </Paragraph>
          </div>
          <div id={'datasource'}>
            <Title>Dats Source</Title>
            <div id={'human'}>
              <Title level={2}>Human</Title>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
            </div>
            <div id={'cellline'}>
              <Title level={2}>Cancer Cell Line</Title>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
            </div>
            <div id={'mouse'}>
              <Title level={2}>Mouse</Title>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
            </div>
          </div>
          <div id={'dataprocess'}>
            <Title>Data Process</Title>
            <div id={'analysis'}>
              <Title level={2}>Analysis</Title>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
            </div>
            <div id={'example'}>
              <Title level={2}>Example</Title>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
            </div>
            <div id={'columndescription'}>
              <Title level={2}>Column Description</Title>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
              <Paragraph>
                Recently, Single-cell bisulfite sequencing methods have been
                widely used in DNA methylation analysis because of their ability
                to clarify epigenomic heterogeneity among cells in various cell
                states. Over the past years, the field of single-cell DNA
                methylation is on the rise with the continuously produced great
                amounts of data, which enhance our understanding of epigenetic
                research of rare cell types, including in the early embryonic
                development, biogenesis of diseases, tumor progression and so
                on.
              </Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
