import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0005:0001",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/sp816.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3077/",
            id: "0005",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "After it has been included into a Z-wave network, the detector will go to sleep but will send a Wakeup Notification Command periodically at preset period to the controller. The Motion detector will stay awake for 10 seconds at least and then go back to sleep to conserve battery life.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3077/SP816 A501112630R01_20180913.pdf",
            name: "ProductManual",
          },
          { text: "Outdoor Motion Detector", name: "Name" },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0005",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "The SP816 Outdoor Motion Detector is a Z-Wave PlusTM enabled device and is fully compatible with any Z-WaveTM enabled network. The device can be set up in a Z-Wave network to communicate directly with other end devices such as lighting controllers, or to report directly to a Z-Eave controller (usually a gateway).\n\nThis motion detector is primarily designed for outdoor lighting control application. It features a PIR motion detector to detect movement in a protected area and a lux sensor for determining brightness of its surroundings. It comes with a built in timer to set the duration for light turn on. The lux level and the timer can be set through knobs on the device itself.\n\nIf the PIR detects motion when lux level falls below a preset setting, the device will transmit a signal to turn on the outdoor lighting (or indirectly through gateway) and then later turns it off when its timer has elapsed.\n\nThis device can also be used as a basic motion sensor for indoor security application.",
            name: "Description",
          },
          { text: "SP816-2", id: "0005", name: "Identifier", type: "0001" },
          {
            text:
              "1. Put the Z-Wave Controller into exclusion mode.\n2. Press the tamper switch 3 times within 1.5 seconds to put the unit into exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Press the tamper switch 3 times within 1.5 seconds to put the unit into exclusion mode.\n2.  Within 1 second of step 1, press the tamper switch again and hold until LED is off (about 5 seconds).\n3.  Node ID is excluded. The device reverts to factory default state and will be in auto-inclusion mode for 4 minutes.\n(This procedure should only be used when the controller is inoperable.)",
            name: "ResetDescription",
          },
          {
            text:
              "1.Put the Z-Wave Controller into inclusion mode.\n2.Press the tamper switch 3 times within 1.5 seconds to put the unit into inclusion mode.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2656/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3077/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                auto: "true",
                index: "2",
                label: "Control",
                max_associations: "4",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
