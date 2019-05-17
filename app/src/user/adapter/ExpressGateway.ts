import { Router } from 'express'
import { PersonStructure } from '@app/user/entity/Person'
import { HttpProxyResponse } from '@app/main/usecase/HttpProxyResponse'
import { PersonController } from '@app/user/adapter/PersonController'

const router: Router = Router()

router.options('/', (request, response): void => {
  response.header('Content-Type', 'text/plain')
    .header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,DELETE').end()
})

router.get('/', async (request, response): Promise<void> => {
  response.header('Content-Type', 'application/json');
  (new PersonController()).find(request.query)
    .then((result): void => HttpProxyResponse.send<PersonStructure>(request, response, result))
    .catch((err): void => HttpProxyResponse.send<Error>(request, response, err))
})

export = router
