import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:0003:0004",
            name: "OzwInfoPage",
          },
          { text: "images/popp/004407.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2086/",
            id: "0003",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2086/004407_en.pdf",
            name: "ProductManual",
          },
          {
            text:
              "To do a factory reset press the button on the bottom of the device for at least 10 seconds. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          { text: "Z-Wave CO Detector", name: "Name" },
          {
            text:
              "The High-End Electro-Chemical Carbon Monoxide alarm head offers a 10 year sensor life and is powered via a 3V lithium battery that powers the Alarm head for the life of the alarm.  The CO Sensor is monitored electronically and will report the following:\n1.\tAlarm on Sensing Carbon Monoxide\n2.\tBattery status reporting\n3.\tSensor Fault\n4.\tAlarm removal from mounting plate\n5.\tEnd of life to make sure it is replaced on time.\nThe device is a secure Z-Wave Plus device and can be used in one wireless Z-Wave network with other certified devices regardless of origin and brand.",
            name: "Description",
          },
          {
            text: "A single click on the button will wakeup the device.",
            name: "WakeupDescription",
          },
          {
            text:
              "Pressing the button 'Inclusion Button' for one second will include the device. If the button is pressed for at least 2 seconds the inclusion will be done without the Security Command Class.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0003",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "A single click on the button will exclude the device.",
            name: "ExclusionDescription",
          },
          { text: "POPE004407", id: "0003", name: "Identifier", type: "0004" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2086/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            instance: "1",
            label: "Value of On-Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            units: "ms",
            value: "99",
            Help: "\n                Value of On-Command\n            ",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Value of Off-Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            units: "ms",
            value: "0",
            Help: "\n                Value of Off-Command\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "10" },
              {
                index: "2",
                label: "Switching Command when Alarm",
                max_associations: "10",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
