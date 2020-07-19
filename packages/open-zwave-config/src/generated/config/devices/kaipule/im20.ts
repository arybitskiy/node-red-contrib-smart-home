import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0214:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "images/kaipule/im20.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2027/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "enter the Exclusion Mode of gateway, and press the tamper switch 3 times within 1.5s, then the door sensor will be removed after a period of time.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "IM20_Zwave is a door/window sensor adopting Zwave500 series chip. It uses special structure design, suitable for kinds of installation environments. Also, it supports door & window open/close detection, anti-tamper, battery level detection and associated gateway and interaction device notifications.",
            name: "Description",
          },
          { text: "Z-Wave DOOR SENSOR", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2027/IM20-Z-Wave Product Manual.pdf",
            name: "ProductManual",
          },
          { text: "IM20-Z-Wave", id: "0001", name: "Identifier", type: "0002" },
          {
            text:
              "Press the tamper switch 6 times in 2s, it will recover to factory setting after a period of time（Please use the reset procedure only when the primary controller is missing or inoperable）",
            name: "ResetDescription",
          },
          {
            text:
              "a) Manual Wake-up\nQuickly press tamper switch once, the door sensor will automatically send wake-up information, and there will be 10s after wake-up to receive gateway setting information.\nb) Automatic Wake-up\nDefault time of automatic wake-up is 24 hours, and there will be 10s after wake-up to receive gateway setting information, the max automatic report time = 24 hours, minimum=30min",
            name: "WakeupDescription",
          },
          {
            text:
              "enter the Inclusion Mode of gateway, and press the tamper switch 3 times within 1.5s,then the door sensor will stay in enrollment state until successfully enrolled into network or enrollment time out after 30s.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2027/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "1",
            instance: "1",
            label: "Basic Set Level",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "Basic Set parameter setting, the receivers make relevant adjustment according to parameter value",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Turn Off Light Time",
            max: "120",
            min: "1",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "20",
            Help:
              "\n\t\t\t\tIf there is any device under Association Group2, the door sensor will send Basic Set = value command to Group2, and send Basic Set = 0x00 command to turn-off light after t seconds,\tSet value = t, means to send Basic Set command after t seconds.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Auto report status time",
            max: "24",
            min: "0",
            size: "1",
            type: "byte",
            units: "hours",
            value: "6",
            Help:
              "\n\t\t\t\tUnder normal working status (without trigger), the door sensor will automatically send report to the Gateway about its current tamper and open/close status.\n\t\t\t\tSet value = t, means t hours, (t=0, means no status report).\n\t\t\t\t0-24 hours (Default 6 hours)",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "Control BASIC SET reports",
                max_associations: "2",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
