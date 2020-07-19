import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Indoor Siren", name: "Name" },
          {
            text:
              "The indoor siren is an intelligent device that can be controlled remotely by the Z-wave network. The indoor siren is battery powered, small and easily installed. When the siren is triggered, an LED light will flash, and there will be an alarm sound at the same time. The sound level is at least 115 dB.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0131:1083:0004",
            name: "OzwInfoPage",
          },
          {
            text: "https://www.zipato.com/product/indoor-siren",
            name: "ProductPage",
          },
          { text: "images/zipato/ne-nas-ab01z.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/3046/ne-nas-ab02z.eu%20-%20Zipato%20INDOOR%20SIREN-waveEU_UserManual_v1.3.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Quickly triple click the code button, LED light will flash red for 5 times.",
            name: "InclusionDescription",
          },
          {
            text:
              "Quickly triple click the code button, LED light will flash red for 5 times.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Make sure the sensor is connected to power source, Press the code button for 10 seconds, LED will flash blue for 3 seconds",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3046",
            id: "1083",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "1083",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text: "ne-nas-ab02z.eu",
            id: "1083",
            name: "Identifier",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Information obtained from manual, z-wavealliance, re-brand documentation (https://products.z-wavealliance.org/products/3069), and trial & error",
                author: "Marcus Birkin - marcus.birkin@gmail.com",
                date: "18 January 2020",
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
            index: "7",
            label: "Siren On Mode",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "This parameter defines the default sound index, volume and the duration time for siren on",
            Item: [
              { label: "Alarm Mode", value: "1" },
              { label: "Doorbell Mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "1",
            label: "Alarm volume",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This parameter defines the output volume when siren plays alarm.",
            Item: [
              { label: "Low", value: "1" },
              { label: "Middle", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Alarm sound index",
            max: "10",
            min: "1",
            type: "byte",
            units: "",
            value: "10",
            Help:
              "This parameter defines the alarm sound index so siren can play different sound when an alarm occurs.",
          },
          {
            genre: "config",
            index: "2",
            label: "Alarm duration time",
            max: "127",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This Parameter defines the alarm duration time when siren receives an alarm sensor notification report or an alarm command from controller.",
            Item: [
              { label: "Siren is not on", value: "0" },
              { label: "30 Seconds", value: "1" },
              { label: "1 Minute", value: "2" },
              { label: "5 Minutes", value: "3" },
              { label: "Siren is always on", value: "127" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Alarm LED",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines the default led enable status when siren is on for alarm",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Doorbell volume",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This parameter defines the output volume when siren plays doorbell music",
            Item: [
              { label: "Low", value: "1" },
              { label: "Middle", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Doorbell sound index",
            max: "10",
            min: "1",
            type: "byte",
            units: "",
            value: "9",
            Help:
              "This parameter defines the doorbell music index so siren can play different music when an alarm occurs. ",
          },
          {
            genre: "config",
            index: "3",
            label: "Doorbell duration time",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "This parameter defines the doorbell music duration time when siren receives a door/window sensor notification report or an alarm command (BASIC_SET=0x02) from a controller",
          },
          {
            genre: "config",
            index: "9",
            label: "Doorbell LED",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines the default led enable status when siren is on for doorbell",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              { index: "2", label: "Siren status", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
