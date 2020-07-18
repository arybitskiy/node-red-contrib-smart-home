import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/027A:0083:0003",
            name: "OzwInfoPage",
          },
          { text: "images/zooz/zse09.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1953/",
            id: "0083",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "DMMS1", id: "0083", name: "Identifier", type: "0003" },
          {
            text:
              "If needed, the Motion Detector can be reset locally by following these steps.  Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system:\n1. Remove the SENSOR COVER and confirm that your Motion Detector is powered up.\n2. Press and hold the BUTTON for at least 10 seconds then release.  A flashing LED INDICATOR indicates a successful factory reset. \n3. The Motion Detector’s memory will be erased to factory settings.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0083",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "Follow the instructions for your Z-Wave Certified Conto enter exclusion mode.  When prompted by the controller:\n1. Remove the SENSOR COVER. \n2. Press the BUTTON quickly 3 times in a row.\nThe LED INDICATOR will flash five times indicating exclusion/disconnection.",
            name: "ExclusionDescription",
          },
          {
            text:
              "The Dome™ Home Automation DMMS1 Z-Wave Certified Motion Detector tracks motion in your home, helping you keep your family safe. When motion is detected, your Z-Wave hub will send an alert to your smartphone, set off an alarm or trigger a lighting scene. This detector can also measure light levels to ensure the lights are operated only when required. Convenient magnetic mount offers the ultimate flexibility for multi surface adaptable installation on either wall, ceiling or table top. The device comes with a CR123A battery and has a 3-year battery life, so you can always be confident that your detector has power. Extra-long Z-Wave wireless range (up to 150 ft) allows you to place it where it’s needed without worrying if the signal reaching your Z-Wave Hub. The Dome™ Home Automation DMMS1 Z-Wave Certified Motion Detector comes with a 1-year limited warranty. Measurements in inches: 2.5 x 3.5 x 6. This sensor requires a Dome™ Home Automation Hub or other Z-Wave Certified hub for operation. The Dome™ Home Automation system gives your family the ease and security you can count on. With Dome™, you’re always connected and always covered. \n●\tDetects movement inside your home with extra wide 110 deg. coverage and responds to activity by sending an alert to your smarthome system. Adjustable sensitivity for optimum performance based on environment\n●\tCapable of sensing current light conditions in the room helping create smart lighting scenes. Adjustable timeout for selecting delay when lights will turn off after motion is no longer detected \n●\tConvenient magnetic mount offering ultimate installation flexibility\n●\tZ-Wave Plus Certified. Requires a Z-Wave Certified Hub to operate. Up to 150-foot range and 3-year battery life (CR123A Battery Included)\n●\tWorks with SmartThings, Vera, Staples Connect, HomeSeer, Nexia, Piper, URC, Harmony. Not supported: Wink, DSC, ADT Pulse, 2gig, Napco, Interlogix, Honeywell (Dome is not associated with listed brands)",
            name: "Description",
          },
          { text: "Dome Z-Wave Plus Motion Detector", name: "Name" },
          {
            text:
              "Because the Motion Detector is a battery powered device, it wakes up on regular intervals to give battery and other status updates to the controller, as well as to accept configuration settings from the controller.  This helps to extend the battery life.  The device can be forced to wake up to submit these reports or accept new settings immediately by simply pressing and holding the BUTTON for two seconds.  The LED INDICATOR will flash once indicating successful wake up.",
            name: "WakeupDescription",
          },
          {
            text:
              "Follow the instructions for your Z-Wave Certified Conto enter inclusion mode.  When prompted by the controller:\n1. The Motion Sensor should be within 10’ of your Z-Wave controller for the inclusion process.  After successful pairing, the device can be brought to the desired location.\n2. Remove the SENSOR COVER by twisting it counterclockwise.\n3. Remove the BATTERY TAB.\n4. Press the BUTTON quickly 3 times in a row.\n5. The LED INDICATOR will flash five times indicating inclusion",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1953/Dome Motion Detector API Manual.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1938/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1953/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            index: "1",
            label: "Motion Sensitivity",
            max: "255",
            min: "8",
            size: "1",
            type: "byte",
            value: "12",
            Help:
              "Adjust motion detection sensitivity.  Lower number is for higher sensitivity, while higher number os for lower sensitivity.  Defaults to 12.",
          },
          {
            genre: "config",
            index: "2",
            label: "Trigger ON Duration",
            max: "600",
            min: "5",
            size: "2",
            type: "short",
            units: "seconds",
            value: "30",
            Help:
              "Set the duration you want the associated device to stay ON after being triggered by the sensor before it automatically turns OFF, in seconds.",
          },
          {
            genre: "config",
            index: "3",
            label: "Trigger Action",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "Configure whether the Mini Sensor turns an associated device on or off when sending the BASIC_SET command.  0 is OFF, 255 is ON, and 1-99 is a percentage of light level.  Value of 100-254 is NOT valid.",
          },
          {
            genre: "config",
            index: "4",
            label: "Motion Detection",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "255",
            Help: "Enable or Disable motion detection.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Light Trigger Level",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            units: "lux",
            value: "100",
            Help:
              "Set light sensor as a secondary trigger for associated devices.  If light level in a room falls beyond the set point and motion is detected, the Mini Sensor will send BASIC_SET command to associated devices to turn ON.",
          },
          {
            genre: "config",
            index: "6",
            label: "Motion Trigger Interval",
            max: "8",
            min: "1",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "8",
            Help:
              "Adjust the time when motion is reported again after initial trigger, in seconds.",
          },
          {
            genre: "config",
            index: "7",
            label: "Light Polling Interval",
            max: "36000",
            min: "60",
            size: "2",
            type: "short",
            units: "seconds",
            value: "180",
            Help:
              "How often the Mini Sensor reports light level to the controller and associated devices, in seconds.",
          },
          {
            genre: "config",
            index: "8",
            label: "Light Trigger",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable/Disable the light sensor as secondary trigger.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Light Report",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "lux",
            value: "100",
            Help: "Change required to report to the controller, in lux.",
          },
          {
            genre: "config",
            index: "10",
            label: "LED Notification",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Enable or Disable LED Notification.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Control Command", max_associations: "5" },
              {
                index: "3",
                label: "Notification report",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Binary sensor report",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
