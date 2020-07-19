import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0178:3130:4442",
            name: "OzwInfoPage",
          },
          { text: "images/nexia/db100z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1349/",
            id: "3130",
            name: "ZWProductPage",
            type: "4442",
          },
          {
            text:
              "When the Install Button is triple-pressed, the device will send a Wakeup Notification report and stay awake for 10 seconds.\n\nWAKEUP_INTERVAL_CAPABILITIES_REPORT \nMin Wake Up Interval :60 seconds \nMax Wake Up Interval: 86400 seconds \nDefault Wake Up Interval: 25200 seconds \nWake Up Interval Step: 60",
            name: "WakeupDescription",
          },
          {
            text:
              "1.  Set primary controller to Exclude mode\n2. Press the Install Button",
            name: "ExclusionDescription",
          },
          { text: "Z-Wave Doorbell Sensor", name: "Name" },
          {
            text:
              "The DB100Z is a battery powered, voltage sensing device that sends out a Notification report when voltage is detected at the sensor inputs.",
            name: "Description",
          },
          {
            text:
              "1.  Set primary controller to Include mode\n2. Press the Install Button",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1349/18-HD77D1-1-EN DB100Z Z-Wave Door Bell Sensor.pdf",
            name: "ProductManual",
          },
          { text: "DB100Z", id: "3130", name: "Identifier", type: "4442" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3130",
            name: "FrequencyName",
            type: "4442",
          },
          {
            text:
              "Please only perform a factory reset when the primary controller is missing or inoperable.  A factory reset will remove all network settings and configurations. \n\n1. Hold down Install Button for 10 seconds\n2. Release the Install Button\n3. When the Status LED begins to blink, the unit has finished restoring configuration",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1349/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
            index: "1",
            label: "Send Battery Report with Notification Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Send a battery report in addition to the alarm report when the alarm report is triggered",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "Yes (recommended)", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
