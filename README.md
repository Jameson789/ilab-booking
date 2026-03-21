# iLab Booking
This application is a lightweight portal for interacting with iLab’s **Service Requests** system. It provides a simplified interface for viewing and managing requests, addressing the usability challenges of the native iLab platform. By streamlining access to key information, the app improves efficiency and reduces friction for users who regularly work with service requests.

### Development Team
- Augy Markham   | [linkedin](https://www.linkedin.com/in/augy-markham/) | [github](https://github.com/AugleBoBaugles) |
- Jameson Farmer | [linkedin](https://www.linkedin.com/in/jameson-farmer) | [github](https://github.com/Jameson789) | 
- Rebecca Riffle | [linkedin](https://www.linkedin.com/in/rebecca-riffle/) | [github](https://github.com/rifflere) |
## Developer Instructions
### Prerequisites
- Node.js
- npm
### Setup Instructions
### Environment Variables
### Running the App: 
*Be in root of project*

#### Mac / Linux 
```bash
npm run dev
``` 
#### Windows
``` bash
# Run this
bash scripts/start-dev.sh

# If that doesn't work, run this ->
chmod +x ./scripts/start-dev.sh && ./scripts/start-dev.sh
```

### Running Tests: 
*Be in root of project*

#### Mac / Linux
``` bash
npm run test
``` 
#### Windows
``` bash
# Run this
bash scripts/test-server.sh

# If that doesn't work, run this ->
chmod +x ./scripts/test-server.sh && ./scripts/test-server.sh
```
### Update "Available Services"
To update the card in the "Available Services" section go to ```next-frontend\components\main-page\AvailableServices.jsx``` and update the "machines" in the grid.

#### Updating current services
1. For whichever service you are changing, replace "[Placeholder Service]" with your new service name.

#### Adding a new services

1. Copy this block into the grid and replace "[Placeholder Service]" with your service name.
```javascript
<Grid size={3}>
    <EquipmentCard machineName="[Placeholder Service]" />
</Grid>
```



---

#### Expected Behavior

- ✅ If all tests pass → the script exits successfully.
- ❌ If any tests fail → the script exits with a non-zero status code (useful for CI).
- ❌ If Node/npm is not installed or `server/` is missing → the script prints an error and exits non-zero.

## UI Design
### Wireframe
[Link to *initial* Wireframe](https://www.notion.so/PCI-Portal-Wireframe-3-3-3198414e033680f382efdf31b2740347?source=copy_link)
### Color Palette
<span style="display:inline-block;width:12px;height:12px;background:#18365D;border-radius:3px;margin-right:6px;"></span> Dark Navy `#18365D`

<span style="display:inline-block;width:12px;height:12px;background:#FFFFFF;border-radius:3px;margin-right:6px;"></span> White `#FFFFFF`

<span style="display:inline-block;width:12px;height:12px;background:#F4F4F4;border:1px solid #ccc;border-radius:3px;margin-right:6px;"></span> Light Grey `#F4F4F4`

<span style="display:inline-block;width:12px;height:12px;background:#00ABC8;border:1px solid #ccc;border-radius:3px;margin-right:6px;"></span> Bright Blue `#00ABC8`

<span style="display:inline-block;width:12px;height:12px;background:#FFB500;border:1px solid #ccc;border-radius:3px;margin-right:6px;"></span> Vivid Yellow `#FFB500`

<span style="display:inline-block;width:12px;height:12px;background:#AA4AC4;border:1px solid #ccc;border-radius:3px;margin-right:6px;"></span> Warm Purple `#AA4AC4`

<span style="display:inline-block;width:12px;height:12px;background:#0A799A;border:1px solid #ccc;border-radius:3px;margin-right:6px;"></span> Teal `#0A799A`
