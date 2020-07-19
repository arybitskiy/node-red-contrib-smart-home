import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Heatit Z-Push Button 8", name: "Name" },
          {
            text:
              "The remote control is a Z-Wave device that can both control other Z-Wave devices and activate scenes in Gateways. Although it is controlling other devices, the device cannot act as Z-Wave network controller (primary or secondary) and will always need a Z-Wave network controller to be added into a Z-Wave network.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/XXXX:XXXX:XXXX",
            name: "OzwInfoPage",
          },
          {
            text: "https://www.heatit.com/z-wave/heatit-z-push-button-8/",
            name: "ProductPage",
          },
          {
            text: "https://www.heatit.com/z-wave/heatit-z-push-button-8/",
            name: "ProductSupport",
          },
          {
            text: "images/thermofloor/Heatit-Z-Push-button-8-white.png",
            name: "ProductPic",
          },
          {
            text:
              "https://www.heatit.com/wp-content/uploads/2019/07/Manual_Heatit_Z-Push_Button_8_FW_1.26_Ver2019-A_ENG.pdf",
            name: "ProductManual",
          },
          { text: "short press any button", name: "WakeupDescription" },
          {
            text:
              "set controller in inclusion mode press and hold down group 2 keys for 3 seconds",
            name: "InclusionDescription",
          },
          {
            text:
              "set controller in exclusion mode press and hold down group 2 keys for 3 seconds",
            name: "ExclusionDescription",
          },
          {
            text:
              "press and hold down group 2 keys for more than 10 seconds use only if controller is unavailable",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3595",
            id: "0xa305",
            name: "ZWProductPage",
            type: "0x0300",
          },
          { text: "CEPT", id: "0xa305", name: "FrequencyName", type: "0x0300" },
          {
            text: "45 125 81 (white) 45 126 81 (black)",
            id: "0xa305",
            name: "Identifier",
            type: "0x0300",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Made config from manual and zwave alliance",
                author: "Jonathan Mos mosjonathan999@hotmail.com",
                date: "03 January 2020",
                revision: 1,
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
            index: "1",
            label: "Factory reset",
            max: "21930",
            min: "21930",
            type: "int",
            units: "",
            value: "0",
            write_only: "true",
            Help: "\n\t\t\tSet to 21930 to factory reset the device.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              {
                index: "2",
                label: "Launch 1",
                max_associations: "5",
                auto: "true",
              },
              {
                index: "3",
                label: "Launch 2",
                max_associations: "5",
                auto: "true",
              },
              {
                index: "4",
                label: "Launch 3",
                max_associations: "5",
                auto: "true",
              },
              {
                index: "5",
                label: "Launch 4",
                max_associations: "5",
                auto: "true",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
