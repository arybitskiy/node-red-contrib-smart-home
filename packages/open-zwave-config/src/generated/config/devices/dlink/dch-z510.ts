import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0108:000A:0004",
            name: "OzwInfoPage",
          },
          { text: "images/dlink/dch-z510.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1262/",
            id: "000A",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text: "CEPT (Europe)",
            id: "000A",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "1. Have Z-Wave™ Controller entered inclusion mode.\n2. Pressing tamper key three times within 1.5 seconds\nto enter the inclusion mode.\n3. After add successful, the LED will light ON 1 second",
            name: "InclusionDescription",
          },
          { text: "mydlink Z-Wave Siren", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1262/DCH-Z510_Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The DCH-Z510 mydlink ™ Z-Wave ™ Siren is a wireless siren, based on Z-Wave ™ technology. It is the  Z-Wave™ plus product, it supports the security, OTA... Those newest features of the  Z-Wave™  technology. Z-Wave™   is  a  wireless  communication  protocol  designed  for  home automation,  specifically  to  remotely  control  applications  in  residential and light commercial environments. The technology uses a low-power RF  radio  embedded  or  retrofitted  into  home  lectronics  devices  and systems, such as lighting, home access control, entertainment systems and household appliances.",
            name: "Description",
          },
          { text: "DCH-Z510", id: "000A", name: "Identifier", type: "0004" },
          {
            text:
              "Notice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1. Pressing tamper key four times within 1.5 seconds and do not release the tamper key in the 4 pressed, and the LED will light ON.\n2. After 3 seconds the LED will turn OFF, after that within 2 seconds, release the tamper key. If successful, the LED will light ON one second. Otherwise, the LED will flash once.\n3. IDs are excluded and all settings will reset to factory default.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Have Z-Wave™ Controller entered exclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1262/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
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
            index: "7",
            label: "Customer Function",
            max: "127",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n          Bit 0: Reserved \n          Bit 1: Reserved \n          Bit 2: Reserved \n          Bit 3: Reserved \n          Bit 4: Notification type (0: Using Notification Report, 1: Using sensor Binary Report). \n          Bit 5: Reserved\n          Bit 6: Reserved\n          Bit 7: Reserved\n       ",
          },
          {
            genre: "config",
            index: "29",
            label: "Disable Alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n          Disable the alarm function.\n          0: Enable Alarm, 1:Disable Alarm,\n          Caution: After the power up, this configuration always be 0.\n       ",
            Item: [
              { label: "Enable Alarm", value: "0" },
              { label: "Disable Alarm", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "31",
            label: "31. Alarm Duration",
            max: "12",
            min: "0",
            type: "byte",
            units: "30 sec",
            value: "6",
            Help:
              "\n          Play alarm sound duration.\n          1 tick is 30 second. Default is 3 minutes, maximum is 63.5 minutes.\n          0: means never auto stop\n       ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "8" }],
          },
        ],
      },
    ],
  },
};

export default config;
