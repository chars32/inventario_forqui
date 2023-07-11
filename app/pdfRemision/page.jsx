'use client'
import { Document, Image, PDFViewer, Page, Text, View } from "@react-pdf/renderer";
import React from "react";

function PageRemision() {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size='A4'>
          {/* Este es el View que será el encabezado.
            TODO: Intentar hacer un componente ya que se usara en otros futuros pdf */}
          <View style={{ margin: '10% 5%', border: '1px solid black', display: 'flex', flexDirection: 'row', height: '9%' }}>
            <Image
              source={'https://i.ibb.co/sKVSXtV/logo-act.png'}
              style={{ width: '15%', padding: '2%', borderRight: '1px solid black' }}
              alt='Logo'
            />
            {/* <Text style={{ width: '20%', backgroundColor: 'red' }}>
            </Text> */}
            <Text style={{ width: '30%', margin: 'auto', textAlign: 'center' }}>Forquimia</Text>
            <View style={{ width: '55%', borderLeft: '1px solid black' }}>
              <View style={{
                borderBottom: '1px 1px solid black',
                fontSize: '12px',
                height: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text>
                  NOTA DE ENTREGA DE MATERIAL
                </Text>
              </View>
              <View style={{ height: '50%', display: 'flex', flexDirection: 'row', fontSize: '10px' }}>
                <View style={{ width: '33%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Text>
                    Identificación
                  </Text>
                  <Text>
                    FQ-LAB-FO-304
                  </Text>
                </View>
                <View style={{ width: '33%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeft: '1px solid black', borderRight: '1px solid black' }}>
                  <Text>Revisión</Text>
                  <Text>01</Text>
                </View>
                <View style={{ width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Text>Folio</Text>
                  <Text>HM0623039</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export default PageRemision;
