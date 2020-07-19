import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:0F01",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgpb101.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1944/",
            id: "1000",
            name: "ZWProductPage",
            type: "0F01",
          },
          {
            text:
              "Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted. In order to reset the device:\n1)\tClick the Button exactly five times.\n2)\tPress and hold the Button for at least 5 seconds.\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable",
            name: "ResetDescription",
          },
          { text: "FIBARO Button", name: "Name" },
          {
            text:
              "1)\tPlace the Button within the direct range of your Z-Wave controller.\n2)\tSet the main controller in remove mode (see the controller’s manual).\n3)\tClick the Button at least six times.\n4)\tWait for the removing process to end.\n5)\tSuccessful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1)\tPlace the Button within the direct range of your Z-Wave controller.\n2)\tSet the main controller in (security/non-security) add mode (see the controller’s manual).\n3)\tClick the Button at least six times.\n4)\tWait for the adding process to end.\n5)\tSuccessful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text:
              "FIBARO Button is a compact, battery-powered, Z-Wave Plus compatible device. It allows you to control devices through the Z-Wave network and run various scenes defined in FIBARO System. \nDifferent actions may be triggered with one to five clicks or by holding the button down. In Panic Button mode, each press of the button results in triggering the Fibaro Alarm. \nWith its small design and wireless communication, the FIBARO Button can be conveniently mounted on any surface and in any position or location at home, e.g. beside the bed or under the desk.",
            name: "Description",
          },
          { text: "FGPB-101", id: "1000", name: "Identifier", type: "0F01" },
          {
            text:
              "The Button needs to be woken up to receive information about the new configuration from the controller, like parameters and associations. \n1)\tClick the Button 4 times to wake it up",
            name: "WakeupDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0F01",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2018/FGPB-101-EN-T-v1.1.pdf",
            name: "ProductManual",
          },
          {
            text: "https://products.z-wavealliance.org/products/2017/",
            id: "2000",
            name: "ZWProductPage",
            type: "0F01",
          },
          { text: "FGPB-101", id: "2000", name: "Identifier", type: "0F01" },
          {
            text: "U.S. / Canada / Mexico",
            id: "2000",
            name: "FrequencyName",
            type: "0F01",
          },
          {
            text: "https://products.z-wavealliance.org/products/2018/",
            id: "3000",
            name: "ZWProductPage",
            type: "0F01",
          },
          {
            text: "Australia / New Zealand",
            id: "3000",
            name: "FrequencyName",
            type: "0F01",
          },
          { text: "FGPB-101", id: "3000", name: "Identifier", type: "0F01" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1944/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2017/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2018/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
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
            instance: "1",
            label: "Scenes sent to the controller",
            max: "127",
            min: "0",
            type: "byte",
            value: "127",
            Help:
              "\n\t\t\t\tThis parameter determines which actions result in sending scene IDs and attributes assigned to them.\n\t\t\t\t1 - Key Pressed 1 time.\n\t\t\t\t2 - Key Pressed 2 times.\n\t\t\t\t4 - Key Pressed 3 times.\n\t\t\t\t8 - Key Pressed 4 times.\n\t\t\t\t16 - Key Pressed 5 times.\n\t\t\t\t32 - Key Held Down.\n\t\t\t\t64 - Key Released.\n\t\t\t\tNote: Values of parameter 1 may be combined, e.g. 1+2=3 means that scenes will be sent after pressing the button once or twice.\n\t\t\t\tDefault: 127 All.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Associations in Z-Wave network security mode",
            max: "7",
            min: "0",
            type: "byte",
            value: "7",
            Help:
              "\n\t\t\t\tThis parameter defines how commands are sent in specified association groups: as secure or non-secure.\n\t\t\t\tParameter is active only in Z-Wave network security mode. It does not apply to 1st Lifeline group.\n\t\t\t\t1 - 2nd group sent as secure.\n\t\t\t\t2 - 3rd group sent as secure.\n\t\t\t\t4 - 4th group sent as secure.\n\t\t\t\tDefault: 3 All.\n\t\t\t",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Key Pressed 1 time - command sent to 2nd association group",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter defines commands sent to devices associated in 2nd association group after a single click",
            Item: [
              { label: "No action", value: "0" },
              { label: "Switch ON", value: "1" },
              { label: "Switch OFF", value: "2" },
              { label: "Switch ON/OFF - alternately", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label:
              "Key Pressed 1 times - value of SWITCH ON command sent to 2nd association group",
            max: "255",
            min: "1",
            type: "short",
            value: "255",
            Help:
              "This parameter defines value of SWITCH ON command sent to devices in 2nd association group after a single click.",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Key Pressed 2 time - command sent to 2nd association group",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines commands sent to devices associated in 2nd association group after a double click",
            Item: [
              { label: "No action", value: "0" },
              { label: "Switch ON", value: "1" },
              { label: "Switch OFF", value: "2" },
              { label: "Switch ON/OFF - alternately", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label:
              "Key Pressed 2 times - value of SWITCH ON command sent to 2nd association group",
            max: "255",
            min: "1",
            type: "short",
            value: "99",
            Help:
              "This parameter defines value of SWITCH ON command sent to devices in 2nd association group after a double click.",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Key Pressed 3 time - command sent to 2nd association group",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines commands sent to devices associated in 2nd association group after a triple click",
            Item: [
              { label: "No action", value: "0" },
              { label: "Switch ON", value: "1" },
              { label: "Switch OFF", value: "2" },
              { label: "Switch ON/OFF - alternately", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label:
              "Key Pressed 3 times - value of SWITCH ON command sent to 2nd association group",
            max: "255",
            min: "1",
            type: "short",
            value: "255",
            Help:
              "This parameter defines value of SWITCH ON command sent to devices in 2nd association group after a triple click.",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Key Pressed 1 time - command sent to 3rd association group",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter defines commands sent to devices associated in 2nd association group after a single click",
            Item: [
              { label: "No action", value: "0" },
              { label: "Switch ON", value: "1" },
              { label: "Switch OFF", value: "2" },
              { label: "Switch ON/OFF - alternately", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label:
              "Key Pressed 1 times - value of SWITCH ON command sent to 3rd association group",
            max: "255",
            min: "1",
            type: "short",
            value: "255",
            Help:
              "This parameter defines value of SWITCH ON command sent to devices in 3rd association group after a single click.",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Key Pressed 2 time - command sent to 3rd association group",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines commands sent to devices associated in 3rd association group after a double click",
            Item: [
              { label: "No action", value: "0" },
              { label: "Switch ON", value: "1" },
              { label: "Switch OFF", value: "2" },
              { label: "Switch ON/OFF - alternately", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label:
              "Key Pressed 2 times - value of SWITCH ON command sent to 3rd association group",
            max: "255",
            min: "1",
            type: "short",
            value: "99",
            Help:
              "This parameter defines value of SWITCH ON command sent to devices in 3rd association group after a double click.",
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Key Pressed 3 time - command sent to 3rd association group",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines commands sent to devices associated in 3rd association group after a triple click",
            Item: [
              { label: "No action", value: "0" },
              { label: "Switch ON", value: "1" },
              { label: "Switch OFF", value: "2" },
              { label: "Switch ON/OFF - alternately", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label:
              "Key Pressed 3 times - value of SWITCH ON command sent to 3rd association group",
            max: "255",
            min: "1",
            type: "short",
            value: "255",
            Help:
              "This parameter defines value of SWITCH ON command sent to devices in 3rd association group after a triple click.",
          },
          {
            genre: "config",
            index: "29",
            instance: "1",
            label: "Key Held Down - command sent to 3rd association group",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter defines commands sent to devices associated in 3rd association group after holding the button down.",
            Item: [
              { label: "No action", value: "0" },
              { label: "Brightening", value: "1" },
              { label: "Dimming", value: "2" },
              { label: "Brightening/Dimming - alternately", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Alarm frame triggers",
            max: "127",
            min: "0",
            type: "byte",
            value: "127",
            Help:
              "\n\t\t\t\tParameter determines which actions result in sending alarm frames to 4th association group.\n\t\t\t\t1 - Key Pressed 1 time.\n\t\t\t\t2 - Key Pressed 2 times.\n\t\t\t\t4 - Key Pressed 3 times.\n\t\t\t\t8 - Key Pressed 4 times.\n\t\t\t\t16 - Key Pressed 5 times.\n\t\t\t\t32 - Key Held Down.\n\t\t\t\t64 - Key Released.\n\t\t\t\tDefault: 127 All.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "On/Off", max_associations: "5" },
              { index: "3", label: "Dimmer", max_associations: "5" },
              { index: "4", label: "Alarm", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
