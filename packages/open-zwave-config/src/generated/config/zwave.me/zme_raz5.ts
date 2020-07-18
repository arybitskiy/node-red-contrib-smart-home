import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0115:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/zwave.me/zme_raz5.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1260/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "n/a", name: "WakeupDescription" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1260/RaZberryEndUserManual.pdf",
            name: "ProductManual",
          },
          {
            text: 'Web Interface; Network Tab, "Exclude Device"',
            name: "ExclusionDescription",
          },
          { text: "ZMEURAZ5", id: "0001", name: "Identifier", type: "0001" },
          { text: "Razberry500", name: "Name" },
          {
            text:
              "The RaZberry solution turns every Raspberry PI micro computer into an Z-Wave based Smart Home Gateway. The backend can support Z-Wave but other third party communication technologies. An embedded web server with an Z-Wave expert UI allows easy  configuration and use. The embedded Apple HomeKit server bridges Z-Wave devices  into the Apple smart home world. The real power of the solution is an very  user friendly API and Javascript based logic engine to enable users to write  their own customized solution und user experience.\n\nThe RaZberry consists of various parts:\n\n(a) Z-Wave transceiver pluggable to the GPIO interface of the Raspberry PI,\n(b) A Z-Wave stack integrated into an open source Javascript based smart home\nautomation engine\n(c) Various user interfaces including an AJAX based Web UI, Apple HomeKit server \nand several IOS and Android Apps.",
            name: "Description",
          },
          {
            text: 'Web Interface; Network Tab, "Reset Controller"',
            name: "ResetDescription",
          },
          {
            text: 'Web Interface; Network Tab, "Include Device"',
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1150/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1260/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
