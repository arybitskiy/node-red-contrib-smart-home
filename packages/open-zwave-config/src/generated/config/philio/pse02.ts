import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:000A:0004",
            name: "OzwInfoPage",
          },
          { text: "images/zipato/pse02.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2419/",
            id: "000A",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "1. Have Z-Wave Controller entered inclusion mode.\n2. Pressing tamper key three times within 1.5 seconds\nto enter the inclusion mode.\n3. After add successful, the LED will light ON 1 second",
            name: "InclusionDescription",
          },
          {
            text:
              "Notice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1. Pressing tamper key four times within 1.5 seconds and do not release the tamper key in the 4 pressed, and the LED will light ON.\n2. After 3 seconds the LED will turn OFF, after that within 2 seconds, release the tamper key. If successful, the LED will light ON one second. Otherwise, the LED will flash once.\n3. IDs are excluded and all settings will reset to factory default.",
            name: "ResetDescription",
          },
          { text: "Indoor Siren, Multisound, Z-wave", name: "Name" },
          {
            text:
              "1. Have Z-Wave Controller entered exclusion mode.\n2. Pressing tamper key three times within 1.5 seconds to enter the exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Zipato Indoor  Siren  is  a  wireless  siren,  based  on  Z-Wave  technology.  It is the Z-Wave plus product, it supports the security, OTA... all the newest  features  of  the  Z-Wave  technology.",
            name: "Description",
          },
          { text: "ph-pse02.eu", id: "000A", name: "Identifier", type: "0004" },
          {
            text: "CEPT (Europe)",
            id: "000A",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2419/Zipato_Siren-UserManual.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2266/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2419/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
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
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tbit 0 Notification Type: 0: Using Notification Report, 1: Using Sensor Binary Report.\n\t\t\t\tbit 7 Other sounds: 0: Disabled, 1: Enable.\n\t\t\t",
            Item: [
              { label: "Using Notification Report", value: "0" },
              { label: "Using Sensor Binary Report", value: "1" },
              {
                label: "Using Notification Report with other sounds",
                value: "128",
              },
              {
                label: "Using Sensor Binary Report with other sounds",
                value: "129",
              },
            ],
          },
          {
            genre: "config",
            index: "29",
            label: "Disable Alarm",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\t\tDisable the alarm function.\n\t\t\t\t1: Disable Alarm,\n\t\t\t\t0: Enable Alarm.\n\t\t\t\tCaution: After the power up, this configuration is always 0.\n\t\t\t",
            Item: [
              { label: "Enable Alarm", value: "0" },
              { label: "Disable Alarm", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "31",
            label: "Basic Set Off Level",
            max: "127",
            min: "0",
            type: "byte",
            value: "6",
            Help:
              "\n\t\t\t\tPlay alarm sound duration,\n\t\t\t\t1 tick is 30 seconds. Default is 3 minutes, maximum is 63.5 minutes.\n\t\t\t\t0 means never auto stop.\n\t\t\t",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
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
