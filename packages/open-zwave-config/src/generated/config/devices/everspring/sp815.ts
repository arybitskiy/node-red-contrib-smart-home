import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0004:0001",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/sp815.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3366/",
            id: "0004",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3366/SP815 user manual_05102019-A501112752R01.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "0004",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "1. Put the Z-Wave Controller into inclusion mode.\n2. Press the learn key 3 times within 1.5 seconds to put the unit into inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text:
              "After it has been included into a Z-Wave network, the detector will go to sleep but will send a Wakeup Notification Command periodically at preset period to the controller. The Motion detector will stay awake for 10 seconds at least and then go back to sleep to conserve battery life.\n\nThe time interval between Wakeup Notification Commands can be set in the Wakeup Command Class based on the range values below: \n\nMinimum Wake Up Interval\t600s (10 minutes)\nMaximum Wake Up Interval\t86400s (1 day)\nDefault Wake Up Interval\t14400s (4 hours)\nWake Up Interval Step Seconds\t600s (10 minutes)",
            name: "WakeupDescription",
          },
          {
            text:
              "1. Press the learn key 3 times within 1.5 seconds to put the unit into exclusion mode.\n2. Within 1 second of step 1, press the learn key again and hold for 5 seconds.\n3. Node ID is excluded. The device reverts to factory default state.\n(This procedure should only be used when the controller is inoperable.)",
            name: "ResetDescription",
          },
          {
            text:
              "1. Put the Z-Wave Controller into exclusion mode.\n2. Press the learn key 3 times within 1.5 seconds to put the unit into exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "The SP815 is a multifunction device with motion detector and temperature/humidity sensor. It uses Passive Infra-Red (PIR) technology to detect movement in a protected area by sensing the changes of thermal radiation caused by the moving body within or across the field of detection. Featuring dual PIR sensor designed with dual lens technology, this detector is immune to presence of pets in the home allowing your pet to move freely without causing false alarms.\n\nThis product is a Z-Wave Plus enabled device and is fully compatible with any Z-Wave enabled network. The device can be set up in a Z-Wave network to communicate directly with other end devices such as smartplugs, or to report directly to a Z-Wave controller (usually a gateway).\n\nWhen the motion detector is triggered, an alarm signal will be emitted to the controller and the controller, after receiving the signal, will perform certain action according to its settings.\n\nThe product has a built in digital temperature sensor and humidity sensor to report environmental condition of the protected area to the controller.\n\nThis product supports the S2 security protocol that uses encrypted Z-Wave Plus messages to communicate to other security-enabled Z-Wave Plus products. A security-enabled Z-Wave Plus Controller must be used in order to fully utilize the security features of this product.",
            name: "Description",
          },
          { text: "SP815-1", id: "0004", name: "Identifier", type: "0001" },
          { text: "PET IMMUNE PIR MOTION DETECTOR", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3366/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
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
            label: "Temperature and Humidity Auto Report period setting",
            max: "1440",
            min: "0",
            type: "short",
            units: "Minutes",
            value: "30",
            Help: "",
          },
          {
            genre: "config",
            index: "2",
            label: "Re-trigger Interval Setting",
            max: "3600",
            min: "10",
            type: "short",
            units: "Seconds",
            value: "180",
            Help:
              "\n                The parameter adjusts the sleep period after the detector has been triggered.\n                No response will be made during this interval if a movement is presented.\n                Longer re-trigger interval will result in longer battery life.\n            ",
          },
          {
            genre: "config",
            index: "3",
            label: "Trigger Off Interval Setting",
            max: "3600",
            min: "10",
            type: "short",
            units: "Seconds",
            value: "15",
            Help:
              "\n                This controls how long the connected lighting will stay on after the motion is detected.\n                This is useful for Group 2 associations where the detector is connected directly to another device such as smartplugs.\n            ",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Pir Control", max_associations: "4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
