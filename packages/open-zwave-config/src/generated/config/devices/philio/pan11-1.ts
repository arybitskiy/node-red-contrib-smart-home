import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pan11-1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/855/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "PAN11-4", id: "0001", name: "Identifier", type: "0001" },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "Features:\n- Higher RF output power (+2.5dBm output power as compared to -2.5dBm 300 series Z-wave module) to enhance the communication range\n- Adopt Z-Wave protocol to secure the success of wireless two way communication\n- Easy install\n- Very low no load power consumption, meet Europe year 2012 energy-related products requirement directive 2009/125/EC no. 1275/2008\n- Resistive load 1400W\n- Overload protection\n- Voltage, Current, Power factor, Instant power Wattage and Accumulated power consumption KWh report\n- Z-Wave V6.02\n- UL, FCC part15B+C LVD",
            name: "Description",
          },
          { text: "Smart Energy Plug In Switch", name: "Name" },
          { text: "http://philio-tech.com/", name: "ProductPage" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/780/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/783/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/784/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/855/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
