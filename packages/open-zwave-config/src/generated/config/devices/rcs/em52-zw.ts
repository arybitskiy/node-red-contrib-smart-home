import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0010:3532:454D",
            name: "OzwInfoPage",
          },
          { text: "images/rcs/em52-zw.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/588/",
            id: "3532",
            name: "ZWProductPage",
            type: "454D",
          },
          {
            text:
              "Overview\n\nThe RCS Energy Meter Series networked power meters are sub-metering devices designed to provide timely and accurate consumption data. These meters can capture kWh/kW energy and demand data as well as virtually all relevant energy parameters for diagnostics and monitoring single-phase circuit installations. Input for 2 CT s can be used to monitor whole house usage (L1 + L2) or 2 single-phase sub-loads.\n\nTechnical Specifications\n\n- Residential Single-phase Configuration – Model EM52\n- 2 Single-phase CT inputs for Whole House consumption\n- Automatically adjusts for CT orientation\n- Greatly reduces setup time and installation errors\n- All-in-One design with flexible antenna for maximum RF range and ease of installation\n- Accuracy: +/- 1% of reading\n- Frequency: 50/60Hz\n- Current Transformer Input: (0-0.333v) (0 – 3.3V)\n- Selectable Current Transformer range (5A-150A)\n- Built-in burden resistor\n- Output Power : Isolated 12VDC 200mA\n- RF Interface: Z-Wave\n- LED indicators\n- Agency approval: FCC, ETL",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3532",
            name: "FrequencyName",
            type: "454D",
          },
          { text: "EM52 Z-Wave Energy Meter", name: "Name" },
          {
            text:
              "http://www.rcstechnology.com/pages/products/z-wave-w-h-meter.html",
            name: "ProductPage",
          },
          { text: "EM52", id: "3532", name: "Identifier", type: "454D" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/588/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ action: "remove", id: "119" }],
  },
};

export default config;
