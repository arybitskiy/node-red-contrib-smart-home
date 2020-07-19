import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/026E:5A31:4252",
            name: "OzwInfoPage",
          },
          { text: "images/graber/brz1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1787/",
            id: "5A31",
            name: "ZWProductPage",
            type: "4252",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "5A31",
            name: "FrequencyName",
            type: "4252",
          },
          {
            text:
              "The Wakeup command class should be configured by a hub when the remote is joined to a Z-Wave network. A WAKE_UP_INTERVAL_SET command should configure the NodeID at a minimum. The Wakeup interval can be configured to any value from 6 minutes to 25 hours. Recommendation is to leave the interval at the default of 12 hours to maximize battery life. The remote will wake up every WakeUpInterval and send a WakeUp Notification command as well as a battery report to the NodeID assigned with the Interval Set command. The WakeUp Notification will be sent within a few minutes of power being applied to the remote and then once every Wake Up Interval. A Wakeup Interval Capabilities command will inform the hub of the default, minimum, maximum and step size of the Wake Up interval.",
            name: "WakeupDescription",
          },
          {
            text:
              "Enjoy the comfort, convenience and energy efficiency of beautiful custom motorized window treatments featuring Z-Wave protocol for easy integration.  Lighting control has never been more simple. Window treatments can be automated using your favorite Z-Wave certified gateway or security system, or controlled by a remote control.  Raise or lower the shades to control just the right amount of light, privacy and solar heat. Shades can be fully open, fully closed or anywhere in between, it’s up to you.  In addition, some systems will also report back the state of the battery charge on battery operated versions.",
            name: "Description",
          },
          {
            text:
              'Press and hold the button on the control for approximately 15 seconds (the LED will stop flashing when complete.\n\n\n"Please use this procedure only when the network primary controller is missing or otherwise inoperable."',
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1787/Graber Virtual Cord Owner's Manual.pdf",
            name: "ProductManual",
          },
          { text: "BRZ1", id: "5A31", name: "Identifier", type: "4252" },
          { text: "Basic Remote Control Z-Wave", name: "Name" },
          {
            text:
              "1. Press and release Twice on Control Programming button. (Tap 2x on prog button)\n\n2.Slave sends NIF",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Press and release Three times on Control Programming button. (Tap 3x on prog button)\n\n2. Slave sends NIF",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1787/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Slave Shades", max_associations: "12" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
