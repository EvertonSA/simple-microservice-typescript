import { Express } from '@app/main/driver/Express'
import { Database } from '@app/database/Connect'

try {
  Database.seed();
  (new Express()).listen()
} catch (err) {
  console.error(err)
}
