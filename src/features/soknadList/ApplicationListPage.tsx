import React, { useEffect } from 'react';
import { Table } from 'antd';
import Periode from '../../components/Periode';
import { useRequest } from '../../api/common';
import { behandlingsPath, personPath } from '../../routes';
import { getSoknader, PaginationInfo, Soknad } from '../../api/soknad';
import { columns } from './columns';
import ErrorPage from '../ErrorPage';
import Spinner from '../../components/Spinner';
import { useRouter } from 'next/router';

export type SoknadWithStatus = Soknad & {
  periode: JSX.Element;
};

const ApplicationListPage = () => {
  const {
    run: runGetSoknader,
    result: soknader,
    isLoading,
    error,
  } = useRequest((arg: PaginationInfo | undefined) => getSoknader(arg));

  const total = soknader?.total;
  const soknaderWithPeriode: SoknadWithStatus[] =
    (soknader?.data || ([] as Soknad[])).map((soknad) => ({
      ...soknad,
      periode: (
        <Periode
          fom={soknad.brukerRegistrertStartDato}
          tom={soknad.brukerRegistrertSluttDato}
        />
      ),
    })) || [];

  const router = useRouter();

  useEffect(() => {
    router.replace(behandlingsPath('123'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = ({
    soknadId,
    fnr,
  }: {
    soknadId: string;
    fnr: string;
  }) => {
    router.push(personPath({ soknadId, fnr }));
  };

  const handlePageChange = (page: number, pageSize: number) => {
    runGetSoknader({ offset: pageSize * (page - 1), pageSize });
  };

  return (
    <div>
      {error ? (
        <ErrorPage errorCode={error?.status} message={error?.message} />
      ) : undefined}
      <Spinner isLoading={!soknader && isLoading}>
        <div className="flex flex-col items-start p-40">
          {!!soknader?.data?.length && (
            <>
              <div className="self-stretch flex border-b-2 border-gray-200 mb-16" />
              <Table
                loading={isLoading}
                className="mt-6"
                columns={columns}
                dataSource={soknaderWithPeriode.map((data, index) => ({
                  ...data,
                  key: index,
                }))}
                pagination={{
                  pageSize: 20,
                  onChange: handlePageChange,
                  total,
                }}
                onRow={(soknad) => {
                  return {
                    onClick: () => {
                      handleClick({
                        fnr: soknad.ident.toString(),
                        soknadId: soknad.id.toString(),
                      });
                    },
                  };
                }}
              />
            </>
          )}
        </div>
      </Spinner>
    </div>
  );
};

export default ApplicationListPage;
