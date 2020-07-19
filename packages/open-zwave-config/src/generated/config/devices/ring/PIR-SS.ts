import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Ring PIR-SS Motion Sensor", name: "Name" },
          {
            text:
              "Ring Motion sensor is a Z-Wave passive infrared (PIR) motion detector which will be used as a primary intrusion detection unit in the system.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0346:0201:0301",
            name: "OzwInfoPage",
          },
          { text: "images/ring/PIR-SS.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2664/Ring%20Motion%20Sensor%20-%20Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Removing the top cover will put the sensor in tamper mode and will keep the sensor awake",
            name: "WakeupDescription",
          },
          {
            text:
              "Exclusion Instructions:\n1.\tInitiate remove sensor flow in the Ring Alarm mobile application – Select the settings icon from device details page and choose “Remove Device”\n2.\tOpen motion sensor’s cover\n3.\tRemove and replace battery quickly",
            name: "ExclusionDescription",
          },
          {
            text:
              "Inclusion instructions: \n1.\tInstall battery, or remove battery tab.  Replace cover\n2.\tPlace Zwave device controller into inclusion mode.\n3.\tRemove cover. Device LED should go on\n4. \tPress down the tamper cover microswitch for one second then release.\n5.\tReplace cover.",
            name: "InclusionDescription",
          },
          {
            text:
              "Factory Default Instructions\n1.\tUsing a pointed end of a paperclip, press and hold the reset button via the reset pin hole found at the back of the sensor\n2.\tBlue LED will start to blink rapidly\n3.\tWait for the blue LED to stop blinking\n\nUse this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2664/",
            id: "0201",
            name: "ZWProductPage",
            type: "0301",
          },
          { text: "PIR-SS", id: "0201", name: "Identifier", type: "0301" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0201",
            name: "FrequencyName",
            type: "0301",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Metadata Creation",
                author: "eyager1",
                date: "22 May 2020",
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
            label: "Unsolicted Report Time",
            max: "4200",
            min: "255",
            size: "2",
            type: "short",
            units: "seconds",
            value: "3600",
            Help:
              "\n        Interval which unsolicted reports are sent.\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Dwell Time",
            max: "9",
            min: "1",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "5",
            Help:
              "\n        Time which sensor will hold onto a motion detected or cleared event.\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Pet Immunity",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help: "\n        Pet Immunity Setting\n      ",
            Item: [
              { label: "No pet immunity", value: "0" },
              { label: "15kg (33lb)", value: "1" },
              { label: "25kg (55lb)", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Walk Test",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "\n        Activate walk test for 15 minutes\n      ",
            Item: [
              { label: "Normal Operation", value: "0" },
              { label: "Activated", value: "255" },
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
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Basic Group", max_associations: "1" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
