import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/021F:0002:0003",
            name: "OzwInfoPage",
          },
          { text: "images/dome/0002.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2158/",
            id: "0002",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "Press and hold the open/close button for at least 10 seconds then release.  The Shut-Off’s memory will be erased to factory settings.  A flashing light indicates a successful factory reset.  Beware that resetting your device will disconnect it from your system. Only do this if the controller is missing or otherwise unreachable!",
            name: "ResetDescription",
          },
          {
            text:
              "The Dome™ Home Automation DMWV1 Water Main Shut-off is designed to fit over existing ¼ turn ball-valves for pipes sized up to 1½ inch. No professional plumbing contractor is required- it can be installed by a homeowner with just a screwdriver. This device requires a Z-Wave Certified hub for operation. When configured with a Water Leak Sensor, the Water Main Shut-off can automatically cut off the supply to limit the damage. You can also remotely control the valve position using your smarthome system mobile app. Extra-long Z-Wave wireless range (up to 150 ft) allows you to place it where it’s needed without worrying if the signal is reaching your Z-Wave Hub. Also functions as Z-Wave signal extender. Dome™ DMWV1 Water Main Shut-off comes with a 1-year limited warranty. Measurements in inches: 2.5  x 3.5  x 6. Dome™ Home Automation Z-Wave devices give your family peace of mind and security you can count on. With Dome™, you’re always connected and always covered. \n\n• Installs over existing valve without need of a plumber using just a screw driver. Works with ¼ turn ball-valves on pipes sized up to 1½ inch\n• Open/Close valve control allowing for automatic water shut-off when leaks are detected as well as on demand control using your smarthome mobile app.\n• Up to 150-foot range. Functions as Z-Wave signal extender\n• Z-Wave Plus Certified. Requires a Z-Wave Certified Hub to operate",
            name: "Description",
          },
          { text: "DMWV1", id: "0002", name: "Identifier", type: "0003" },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified Controller to enter exclusion mode. \n2. When prompted, press the “open/close” button on the Shut-Off quickly 3 times in a row.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2158/Dome Water Main Shut-Off Advanced Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1 For proper inclusion, bring the Water Main Shut-Off to the final location where it will be used. *\n2 Follow the instructions for your Z-Wave controller to enter inclusion mode.\n3 Make sure the Water Main Shut-Off is powered on, and when prompted by your controller, press the “open/close” button quickly 3 times in a row.  The LED will stop blinking and stay on continuously upon successful inclusion.\n\n*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Water Main Shut-Off to your Z-Wave network.",
            name: "InclusionDescription",
          },
          { text: "Water Main Shut-Off", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2158/xml",
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
      { id: "39" },
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
