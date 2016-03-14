import logging
import requests
import sys
import time

LOG_FILE = 'magnificient.log'
URL = 'http://localhost:12345'
AMT_SLEEP = 2
COUNT = 3
SUCCESS = 200
STAT_MSG ="Success: {}, Fail: {}. Number of calls: {} in {} seconds \n"+\
           "Total success: {}. Total fail: {} since running script"

logging.basicConfig(filename=LOG_FILE,
                    format='%(asctime)s %(message)s',
                    level=logging.WARNING)

logger = logging.getLogger(__name__)

def getStats(success, fail, total_success, total_fail):
    '''
    Return stat message with summary of successful and failed calls
    to the server
    '''
    total_time = COUNT*AMT_SLEEP
    stat_msg = STAT_MSG.format(success, fail, COUNT, total_time,
                               total_success, total_fail)
    return stat_msg

def main():
    total_success = 0
    total_fail = 0
    current_success = 0
    current_fail = 0
    counter = COUNT # amount of requests before getStats is called

    while True:
        if counter == 0:
            logger.warning(getStats(current_success, current_fail,
                                    total_success, total_fail))
            counter = COUNT
            current_success = 0
            current_fail = 0

        try:
            r = requests.get(URL)
            logger.warning(r.status_code)

            if (r.status_code == SUCCESS):
                current_success += 1
                total_success += 1
            else:
                current_fail += 1
                total_fail += 1

            counter -= 1
            time.sleep(AMT_SLEEP)
        except requests.exceptions.RequestException as e:
            logger.warning("Unexpected error with server")
            logger.warning("Script will halt. Error trace:")
            logger.warning(e)
            sys.exit(1)


if __name__ == '__main__':
    main()
