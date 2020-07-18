import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0010:0009:0001",
            name: "OzwInfoPage",
          },
          { text: "images/rcs/therm0009.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/82/",
            id: "0009",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "Z-Wave Thermostat.Separate Heat and Cool Setpoints\n\tUp to 3 Stage Heat, 2 Stage Cool\n\tRemote control of most functions via Zwave\n\tTwo part design or New 1 piece design\n\tBacklit LCD Wall Display Unit\n\tFor standard gas/electric or heat pump HVAC systems\n\tReplaces existing 4 or more wire thermostats without the need for additional wiring (TZ16/TZ40)\n\tOptional Remote Temperature Sensor\n\tPower: 24VAC supplied from HVAC system\n\tSupports the ZWave thermostat device class",
            name: "Description",
          },
          {
            text:
              "http://www.rcstechnology.com/pages/products/thermo-z-wave.html",
            name: "ProductPage",
          },
          { text: "TZ45 Z-Wave Thermostat", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0009",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "http://www.rcstechnology.com/oldsite/products/stats/zwave.htm",
            name: "ProductSupport",
          },
          { text: "TZ45", id: "0009", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/82/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ id: "67", Compatibility: [{ Base: [0] }] }],
  },
};

export default config;
