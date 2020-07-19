import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:8371:0100",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/zxt-310.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1540/",
            id: "8371",
            name: "ZWProductPage",
            type: "0100",
          },
          {
            text:
              "Z-Wave to IR extender for Audio/Video devices with built-in and cloud-based IR library.",
            name: "Description",
          },
          { text: "Remotec ZXT-310US", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "8371",
            name: "FrequencyName",
            type: "0100",
          },
          { text: "BW8371US", id: "8371", name: "Identifier", type: "0100" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1540/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "27",
            label: "IR code number from table",
            type: "short",
            units: "",
            Help:
              '\n        IR code number for built-in code library. Refer "Code list" for details.\n      ',
          },
          {
            genre: "config",
            index: "38",
            label: "End-point selection control",
            max: "6",
            min: "1",
            type: "byte",
            units: "",
            Help:
              "\n        * 1 (0x01) = EP1 \n        * 1 (0x02) = EP2 \n        * 1 (0x03) = EP3 \n        * 1 (0x04) = EP4 \n        * 1 (0x05) = EP5 \n        * 1 (0x06) = EP6 \n      ",
          },
          {
            genre: "config",
            index: "29",
            label: "IR Port Mapping",
            max: "6",
            min: "1",
            type: "byte",
            units: "",
            Help:
              '\n        IR output port routing. \n        Please make sure that the "End point selection control" has completed (if necessary) before process the following setup.\n      ',
          },
          {
            genre: "config",
            index: "28",
            label: "IR Output Power",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            Help:
              '\n        Please  make  sure  that  the  "End  point  selection  control"  has completed (if necessary) before process the following setup. \n        \n        Set IR output power level by entering: \n        * 0 (0x00) Normal power mode; \n        * 255 (0xFF) High power mode; \n        (default is in high power mode). \n      ',
          },
          {
            genre: "config",
            index: "25",
            label: "IR Code Learning",
            type: "short",
            units: "",
            Help:
              '\n        Please make sure that the "End point selection control" has completed (if necessary) before process the following setup.\n\n        Place the ZXT-310 and your original remote on a flat surface, aimed at each other and 1-3 cm apart from the "L" learning mark.\n        Press and keep holding the key on your original equipment remote which you want to learn for a few seconds.\n\n        Value is the Simple AV command number or key going to be learned.\n        Any incoming operation may probably to wait up to 15s to release until the internal process of parameter has finished.\n\n        (Z-Wave Cmd#, e.g. if POWER key is going to be learnt, input the value: 39 (0x27))\n      ',
          },
          {
            genre: "config",
            index: "26",
            label: "Learning status register",
            read_only: "true",
            type: "byte",
            units: "",
            Help:
              "\n        * 0 (0x00): IR channel idle (default)\n        * 1 (0x01): OK\n        * 2 (0x02): Learning\n        * 3 (0x03): Command Full\n        * 4 (0x04): Learning Fail\n      ",
          },
          {
            genre: "config",
            index: "31",
            label: "IR transmission mode",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            Help:
              '\n        Please make sure that the "End point selection control" has completed (if necessary) before process the following setup. \n\n        * 0 (0x00): Continuous IR transmission mode (default); \n        * 255 (0xFF): Single shot IR transmission mode; \n      ',
          },
        ],
      },
    ],
  },
};

export default config;
