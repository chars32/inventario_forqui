'use client'
import { Document, Image, PDFViewer, Page, Text, View } from "@react-pdf/renderer";
import React from "react";

function PageRemision() {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size='A4' style={{ fontSize: '10px' }}>
          {/* Este  encabezado del pdf */}
          <View style={{ margin: '5% 5% 1% 5%', border: '1px solid black', display: 'flex', flexDirection: 'row', height: '9%' }}>
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
          {/* Datos del cliente pdf */}
          <View style={{ margin: '0 5% 0 5%', border: '1px solid black', height: '8vh' }}>
            <View style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
              <View style={{ width: '81.5%', display: 'flex', flexDirection: 'row' }}>
                <View style={{ width: '30%', borderRight: '1px solid black' }}>
                  <View style={{ backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25%', borderBottom: '1px solid black' }}>
                    <Text>Cliente</Text>
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75%' }}>
                    <Text>Bhomsa</Text>
                  </View>
                </View>
                <View style={{ width: '25.5%', borderRight: '1px solid black ' }}>
                  <View style={{ backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '7}8}100%', borderBottom: '1px solid black' }}>
                    <Text>Orden de Compra</Text>
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75%' }}>
                    <Text>0000001</Text>
                  </View>
                </View>
                <View style={{ width: '44.5%', borderRight: '1px solid black' }}>
                  <View style={{ backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25%', borderBottom: '1px solid black' }}>
                    <Text>Dirección de entrega</Text>
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75%' }}>
                    <Text style={{ textAlign: 'center', padding: '0 1%' }}>Carretera Cardenas- Villahermosa km 136.5. Ranchería Plátano y Cacao Villahermosa, Tabasco.</Text>
                  </View>
                </View>
              </View>
              <View style={{ width: '18.5%' }}>
                <View style={{ backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25%', borderBottom: '1px solid black' }}>
                  <Text>Fecha</Text>
                </View>
                <View style={{ backgroundColor: 'yellow', borderBottom: '1px solid black', height: '35%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ borderRight: '1px solid black', width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Dia</Text>
                  </View>
                  <View style={{ borderRight: '1px solid black', width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Mes</Text>
                  </View>
                  <View style={{ width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Año</Text>
                  </View>
                </View>
                <View style={{ display: 'flex', height: '40%', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ borderRight: '1px solid black', width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>23</Text>
                  </View>
                  <View style={{ borderRight: '1px solid black', width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>07</Text>
                  </View>
                  <View style={{ width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>2023</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ margin: '0 5% 0 5%', border: '1px solid black', borderTop: 'none', height: '5vh' }}>
            <View style={{ display: 'flex', flexDirection: 'row', height: '40%' }}>
              <View style={{ backgroundColor: 'yellow', width: '60%', borderRight: '1px solid black', borderBottom: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                  Transporte
                </Text>
              </View>
              <View style={{ backgroundColor: 'yellow', width: '21.5%', borderRight: '1px solid black', borderBottom: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                  Placa
                </Text>
              </View>
              <View style={{ backgroundColor: 'yellow', width: '18.5%', borderBottom: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                  Unidad
                </Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', height: '60%' }}>
              <View style={{ width: '60%', borderRight: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                  TRANSCADI
                </Text>
              </View>
              <View style={{ width: '21.5%', borderRight: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                  27-BA-8C
                </Text>
              </View>
              <View style={{ width: '18.5%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                  01
                </Text>
              </View>
            </View>
          </View>
          {/* Cuerpo del pdf */}
          <View style={{ margin: '0 5% 0 5%', border: '1px solid black', marginTop: '1%', height: '50vh' }}>
            <View style={{ display: 'flex', flexDirection: 'row', height: '5%' }}>
              <View style={{ backgroundColor: 'yellow', width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
                <Text>Partida</Text>
              </View>
              <View style={{ backgroundColor: 'yellow', width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
                <Text>Cantidad</Text>
              </View>
              <View style={{ backgroundColor: 'yellow', width: '12%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
                <Text>Unidad</Text>
              </View>
              <View style={{ backgroundColor: 'yellow', width: '68%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid black' }}>
                <Text>Descripcion</Text>
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', height: '80%' }}>
              <View style={{ width: '10%', display: 'flex', alignItems: 'center', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
                <Text style={{ marginTop: '20%' }}>Partida</Text>
                <Text style={{ marginTop: '20%' }}>Partida</Text>
              </View>
              <View style={{ width: '10%', display: 'flex', alignItems: 'center', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
                <Text style={{ marginTop: '20%' }}>Cantidad</Text>
                <Text style={{ marginTop: '20%' }}>Cantidad</Text>
              </View>
              <View style={{ width: '12%', display: 'flex', alignItems: 'center', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
                <Text style={{ marginTop: '16.5%' }}>Unidad</Text>
                <Text style={{ marginTop: '16.5%' }}>Unidad</Text>
              </View>
              <View style={{ width: '68%', display: 'flex', alignItems: 'center', borderBottom: '1px solid black' }}>
                <Text style={{ marginTop: '2.8%' }}>Descripciones</Text>
                <Text style={{ marginTop: '2.8%' }}>Descripciones</Text>
              </View>
            </View>
            <View style={{ height: '15%' }}>
              <View style={{ backgroundColor: 'yellow', width: '32%', height: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid black', borderRight: '1px solid black' }}>
                <Text>Observaciones</Text>
              </View>
              <View>
                <Text>Aqui van las observaciones</Text>
              </View>
            </View>
          </View>
          {/* Footer del pdf */}
          <View style={{ margin: '1% 5% 0 5%', border: '1px solid black', height: '17vh', display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <View style={{ width: '100%', borderRight: '1px solid black', borderBottom: '1px solid black', backgroundColor: 'yellow', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Cliente</Text>
                <Text>(Recibi de conformidad el material especificado)</Text>
              </View>
              <View style={{ width: '100%', borderRight: '1px solid black', height: '70%', display: 'flex', flexDirection: 'row' }}>
                <View style={{ borderRight: '1px solid black', width: '35%' }}>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '25%' }}>
                    <Text>Nombre: </Text>
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '25%' }}>
                    <Text>No. Empleado: </Text>
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '25%' }}>
                    <Text>Firma: </Text>
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '25%' }}>
                    <Text>Cargo: </Text>
                  </View>0000
                </View>
                <View style={{ width: '65%' }}>
                  <View style={{ display: 'flex', height: '25%', borderBottom: '1px solid black' }}>
                  </View>
                  <View style={{ display: 'flex', height: '25%', borderBottom: '1px solid black' }}>
                  </View>
                  <View style={{ display: 'flex', height: '25%', borderBottom: '1px solid black' }}>
                  </View>
                  <View style={{ display: 'flex', height: '25%' }}>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ width: '50%' }}>
              <View style={{ width: '100%', borderRight: '1px solid black', borderBottom: '1px solid black', backgroundColor: 'yellow', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text>FORQUIMIA</Text>
              </View>
              <View style={{ width: '100%', borderRight: '1px solid black', height: '70%', display: 'flex', flexDirection: 'row' }}>
                <View style={{ borderRight: '1px solid black', width: '35%' }}>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '25%' }}>
                    <Text>Nombre: </Text>
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '25%' }}>
                    <Text>No. Empleado: </Text>
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '25%' }}>
                    <Text>Firma: </Text>
                  </View>
                  <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '25%' }}>
                    <Text>Cargo: </Text>
                  </View>0000
                </View>
                <View style={{ width: '65%' }}>
                  <View style={{ display: 'flex', height: '25%', borderBottom: '1px solid black' }}>
                  </View>
                  <View style={{ display: 'flex', height: '25%', borderBottom: '1px solid black' }}>
                  </View>
                  <View style={{ display: 'flex', height: '25%', borderBottom: '1px solid black' }}>
                  </View>
                  <View style={{ display: 'flex', height: '25%' }}>
                  </View>
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
